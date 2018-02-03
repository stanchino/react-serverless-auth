import { call, put, select } from "redux-saga/effects";
import { replace } from "react-router-redux";

import { authRoutes } from "..";
import { passwordResetRequestRoutine, signUpRoutine} from "../actions";
import { passwordResetRequest } from "../services";
import { formError } from ".";

export const routerSelector = state => state.router;

export function* handlePasswordResetRequestSaga({ payload: { values } }) {
    const { email } = values;
    const { location: { pathname } } = yield select(routerSelector);
    try {
        yield put(passwordResetRequestRoutine.request({ profile: { email: email } }));
        const { user, data } = yield call(passwordResetRequest, email);
        yield put(passwordResetRequestRoutine.success({ user: user, ...data }));
    } catch (error) {
        if ("UserNotConfirmedException" === error.code) {
            yield put(signUpRoutine.success({profile: { email: email }, flash: { error: error.message }, pathname: pathname}));
            yield put(replace(authRoutes.confirm));
        } else {
            yield formError(passwordResetRequestRoutine, {
                email: "Invalid user.",
                _error: error.message
            });
        }
    } finally {
        yield put(passwordResetRequestRoutine.fulfill())
    }
}