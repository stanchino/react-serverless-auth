import { call, put, select } from "redux-saga/effects";
import { replace } from "react-router-redux";

import { authRoutes } from "..";
import { passwordResetRequestRoutine, resendConfirmationCodeRoutine, signUpRoutine } from "../actions";
import { passwordResetRequest } from "../services";
import { formError } from ".";

const email_present = hash => (hash && hash.email);

export const routerSelector = state => state.router;
export const authSelector = state => state.auth;

export function* fetchEmail (values) {
  if (email_present(values)) {
    return values;
  } else {
    const { profile } = yield select(authSelector);
    return profile;
  }
}

export function* handlePasswordResetRequestSaga({ payload: { values } }) {
  const { location: { pathname } } = yield select(routerSelector);
  const { email } = yield call(fetchEmail, values);
  try {
    yield put(passwordResetRequestRoutine.request({ profile: { email: email } }));
    const { user, data } = yield call(passwordResetRequest, email);
    yield put(passwordResetRequestRoutine.success({ user: user, ...data }));
    if (!email_present(values)) {
      yield put(resendConfirmationCodeRoutine.success('A new code was sent'));
    }
  } catch (error) {
    if ("UserNotConfirmedException" === error.code) {
      yield put(signUpRoutine.success({profile: { email: email }, flash: { error: error.message }, pathname: pathname}));
      yield put(replace(authRoutes.confirm));
    } else {
      yield formError(passwordResetRequestRoutine, {
          email: "Invalid user.",
          _error: error.message
      });
    }
  } finally {
      yield put(passwordResetRequestRoutine.fulfill())
  }
}