import { call, put, select } from "redux-saga/effects";
import { authRoutine } from "../actions";
import { authRequest, userAttributes } from "../services";

export const authSelector = state => state.auth;

export function* handleAuthSaga() {
    let profile;
    let { user } = yield select(authSelector);
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