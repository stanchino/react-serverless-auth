import { call, put, select } from "redux-saga/effects";
import { replace } from "react-router-redux";

import { confirmationRoutine, signInRoutine } from "../actions";

import { confirmationRequest } from "../services";

import { formError } from ".";

export const auth = state => ({ ...state.auth });

export function* handleConfirmationSaga({ payload: { values: { code } } }) {
    const { profile, pathname } = yield select(auth);
    const { email, password } = profile;
    try {
        yield put(confirmationRoutine.request());
        yield call(confirmationRequest, email, code);
        yield put(signInRoutine.trigger({ values: { email: email, password: password } }));
        yield put(replace(pathname));
    } catch (error) {
        yield formError(confirmationRoutine, {
            code: "Invalid code",
            _error: error.message
        });
        yield put(confirmationRoutine.fulfill());
    }
}