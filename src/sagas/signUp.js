import { call, put } from "redux-saga/effects";
import { replace } from "react-router-redux";

import { authRoutes } from "..";
import { signUpRoutine, signInRoutine } from "../actions";
import { signUpRequest }  from "../services";
import { formError } from ".";

export function* handleSignUpSaga({ payload: { values } }) {
    const { email, password } = values;
    try {
        yield put(signUpRoutine.request({ profile: values }));
        yield call(signUpRequest, email, password);
        yield put(signUpRoutine.success({ profile: { email: email, password: password } }));
        yield put(replace(authRoutes.confirm));
        yield put(signUpRoutine.fulfill())
    } catch (error) {
        if ("UsernameExistsException" === error.code) {
            yield put(signInRoutine.trigger({ values: { email: email, password: password } }));
            yield put(signUpRoutine.success({ profile: { email: email, password: password }, flash: { error: error.message } }));
            yield put(replace(authRoutes.signIn));
        } else {
            yield formError(signUpRoutine, { _error: error.message });
            yield put(signUpRoutine.fulfill())
        }
    }
}