import {call, put, select } from "redux-saga/effects";
import { authRoutine } from "../actions";
import { authRequest, userAttributes } from "../services";

export const getUser = state => (state.auth.user);

export function* handleAuthSaga() {
    let profile;
    let user = yield select(getUser);
    try {
        yield put(authRoutine.request());
        if (null === user)  {
            user = yield call(authRequest);
        }
        if (user) {
            profile = yield call(userAttributes, user);
            yield put(authRoutine.success({ user: user, profile: profile }));
        }
    } catch (error) {
        yield put(authRoutine.failure({ flash: { error: error.message } }));
    } finally {
        yield put(authRoutine.fulfill())
    }
}