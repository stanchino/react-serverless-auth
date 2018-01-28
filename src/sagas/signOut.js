import {call, put, select} from "redux-saga/effects";
import { signOutRoutine } from "../actions";
import { signOutRequest } from "../services";

export const authSelector = state => (state.auth);

export function* handleSignOutSaga() {
    const { user } = yield select(authSelector);
    try {
        yield put(signOutRoutine.request());
        if (user) {
            yield call(signOutRequest, user);
        }
    } finally {
        yield put(signOutRoutine.fulfill())
    }
}