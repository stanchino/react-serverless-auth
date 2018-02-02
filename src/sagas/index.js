import { takeEvery, put } from "redux-saga/effects";
import { SubmissionError } from "redux-form";

import { routinePromiseWatcherSaga } from "redux-saga-routines";

import {
    authRoutine,
    confirmRegistrationRoutine,
    passwordResetConfirmRoutine,
    passwordResetRequestRoutine,
    signInRoutine,
    signOutRoutine,
    signUpRoutine
} from "../actions";

import { handleSignUpSaga } from "./signUp";
import { handleConfirmRegistrationSaga } from "./confirmRegistration";
import { handleSignInSaga } from "./signIn";
import { handleAuthSaga } from "./auth";
import { handleSignOutSaga } from "./signOut";
import { handlePasswordResetRequestSaga } from "./passwordResetRequest";
import { handlePasswordResetConfirmSaga } from "./passwordResetConfirm";

export function* authWatcher() {
  yield takeEvery(authRoutine.TRIGGER, handleAuthSaga);
}

export function* confirmRegistrationWatcher() {
    yield takeEvery(confirmRegistrationRoutine.TRIGGER, handleConfirmRegistrationSaga);
}

export function* passwordResetConfirmWatcher() {
  yield takeEvery(passwordResetConfirmRoutine.TRIGGER, handlePasswordResetConfirmSaga);
}

export function* passwordResetRequestWatcher() {
  yield takeEvery(passwordResetRequestRoutine.TRIGGER, handlePasswordResetRequestSaga);
}

export function* signInWatcher() {
    yield takeEvery(signInRoutine.TRIGGER, handleSignInSaga);
}

export function* signOutWatcher() {
    yield takeEvery(signOutRoutine.TRIGGER, handleSignOutSaga);
}

export function* signUpWatcher() {
  yield takeEvery(signUpRoutine.TRIGGER, handleSignUpSaga);
}

export const formError = (action, errors) => (
    put(action.failure(new SubmissionError(errors)))
);

export default [
    routinePromiseWatcherSaga,
    authWatcher,
    confirmRegistrationWatcher,
    passwordResetConfirmWatcher,
    passwordResetRequestWatcher,
    signInWatcher,
    signOutWatcher,
    signUpWatcher,
    handleAuthSaga
];