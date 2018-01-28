import {call, put, select} from "redux-saga/effects";
import { passwordResetConfirmRoutine, signInRoutine } from "../actions";
import { passwordResetConfirm } from "../services";
import { formError } from ".";

export const authSelector = state => (state.auth);

export function* handlePasswordResetConfirmSaga({ payload: { values } }) {
    const { code, password } = values;
    const { user, profile: { email } } = yield select(authSelector);
    try {
        yield put(passwordResetConfirmRoutine.request());
        yield call(passwordResetConfirm, user, code, password);
        yield put(signInRoutine.trigger({ values: { email: email, password: password } }));
    } catch (error) {
        yield formError(passwordResetConfirmRoutine, { _error: error.message })
    } finally {
        yield put(passwordResetConfirmRoutine.fulfill())
    }
}