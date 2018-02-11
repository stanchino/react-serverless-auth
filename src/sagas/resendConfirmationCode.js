import { call, put, select } from "redux-saga/effects";

import { resendConfirmationCodeRoutine } from "../actions";

import { resendConfirmationCode } from "../services";

export const authSelector = state => state.auth;

export function* handleResendConfirmationCodeSaga() {
  const { profile: { email } } = yield select(authSelector);
  try {
    yield put(resendConfirmationCodeRoutine.request());
    yield call(resendConfirmationCode, email);
    yield put(resendConfirmationCodeRoutine.success('A new code was sent'));
  } catch (error) {
    yield put(resendConfirmationCodeRoutine.failure(error.message));
  } finally {
    yield put(resendConfirmationCodeRoutine.fulfill());
  }
}