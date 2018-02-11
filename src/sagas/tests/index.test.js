import { takeEvery } from "redux-saga/effects";
import sagaHelper from "redux-saga-testing";

import { handleAuthSaga } from "../auth";
import { handleConfirmRegistrationSaga } from "../confirmRegistration";
import { handlePasswordResetConfirmSaga } from "../passwordResetConfirm";
import { handlePasswordResetRequestSaga } from "../passwordResetRequest";
import { handleSignInSaga } from "../signIn";
import { handleSignOutSaga } from "../signOut";
import { handleSignUpSaga } from "../signUp";
import { handleResendConfirmationCodeSaga } from "../resendConfirmationCode";
import {
  authRoutine,
  confirmRegistrationRoutine,
  passwordResetConfirmRoutine,
  passwordResetRequestRoutine,
  resendConfirmationCodeRoutine,
  signInRoutine,
  signOutRoutine,
  signUpRoutine
} from "../../actions";

import {
  authWatcher,
  confirmRegistrationWatcher,
  passwordResetConfirmWatcher,
  passwordResetRequestWatcher,
  resendConfirmationCodeWatcher,
  signInWatcher,
  signOutWatcher,
  signUpWatcher
} from "..";

const testSaga = (saga, action, handler) => {
  const it = sagaHelper(saga());
  it("triggers the takeEvery action", result => {
    expect(result).toEqual(takeEvery(action, handler));
  });
};

describe("exported sagas", () =>{
  testSaga(authWatcher, authRoutine.TRIGGER, handleAuthSaga);
  testSaga(confirmRegistrationWatcher, confirmRegistrationRoutine.TRIGGER, handleConfirmRegistrationSaga);
  testSaga(passwordResetConfirmWatcher, passwordResetConfirmRoutine.TRIGGER, handlePasswordResetConfirmSaga);
  testSaga(passwordResetRequestWatcher, passwordResetRequestRoutine.TRIGGER, handlePasswordResetRequestSaga);
  testSaga(signInWatcher, signInRoutine.TRIGGER, handleSignInSaga);
  testSaga(signOutWatcher, signOutRoutine.TRIGGER, handleSignOutSaga);
  testSaga(signUpWatcher, signUpRoutine.TRIGGER, handleSignUpSaga);
  testSaga(resendConfirmationCodeWatcher, resendConfirmationCodeRoutine.TRIGGER, handleResendConfirmationCodeSaga);
});