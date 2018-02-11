import { call, put, select } from "redux-saga/effects";
import { replace } from "react-router-redux";

import { confirmRegistrationRoutine, signInRoutine } from "../actions";

import { confirmRegistrationRequest } from "../services";

import { formError } from ".";

export const authSelector = state => state.auth;

export function* handleConfirmRegistrationSaga({ payload: { values: { code } } }) {
    const { profile: { email, password }, pathname } = yield select(authSelector);
    try {
        yield put(confirmRegistrationRoutine.request());
        yield call(confirmRegistrationRequest, email, code);
        yield put(signInRoutine.trigger({ values: { email: email, password: password } }));
        yield put(replace(pathname));
    } catch (error) {
        yield formError(confirmRegistrationRoutine, {
            code: "Invalid code",
            _error: error.message
        });
        yield put(confirmRegistrationRoutine.fulfill());
    }
}