import {call, put, select} from "redux-saga/effects";
import { replace } from "react-router-redux";

import { authRoutes } from "..";
import { signInRoutine, authRoutine, signUpRoutine} from "../actions";
import { signInRequest } from "../services";
import { formError } from ".";

export const routerSelector = state => state.router;

export function* handleSignInSaga({ payload: { values } }) {
    let user;
    const { email, password } = values;
    const { location: { pathname } } = yield select(routerSelector);
    try {
        yield put(signInRoutine.request({ profile: { email: email, password: password } }));
        user = yield call(signInRequest, email, password);
        yield put(signInRoutine.success({ user: user }));
        yield put(authRoutine.trigger());
    } catch (error) {
        if ("UserNotConfirmedException" === error.code) {
            yield put(signUpRoutine.success({ profile: { email: email, password: password }, flash: { error: error.message }, pathname: pathname }));
            yield put(replace(authRoutes.confirm));
        } else {
            yield formError(signInRoutine, {
                email: "Invalid user.",
                _error: error.message
            });
        }
        yield put(signInRoutine.fulfill())
    }
}