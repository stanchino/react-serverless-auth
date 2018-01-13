import {call, put, select} from "redux-saga/effects";
import { signOutRoutine } from "../actions";
import { signOutRequest } from "../services";

export const getUser = state => (state.auth.user);

export function* handleSignOutSaga() {
    const user = yield select(getUser);
    try {
        yield put(signOutRoutine.request());
        if (user) {
            yield call(signOutRequest, user);
        }
    } finally {
        yield put(signOutRoutine.fulfill())
    }
}