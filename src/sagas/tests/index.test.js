import { takeEvery } from "redux-saga/effects";
import sagaHelper from "redux-saga-testing";

import { handleAuthSaga } from "../auth";
import { handleConfirmationSaga } from "../confirmation";
import { handleSignInSaga } from "../signIn";
import { handleSignOutSaga } from "../signOut";
import { handleSignUpSaga } from "../signUp";
import { authRoutine, confirmationRoutine, signInRoutine, signOutRoutine, signUpRoutine } from "../../actions";

import { authWatcher, confirmationWatcher, signInWatcher, signOutWatcher, signUpWatcher } from "..";

const testSaga = (saga, action, handler) => {
    const it = sagaHelper(saga());
    it("triggers the takeEvery action", result => {
        expect(result).toEqual(takeEvery(action, handler));
    });
};

describe("exported sagas", () =>{
    testSaga(authWatcher, authRoutine.TRIGGER, handleAuthSaga);
    testSaga(confirmationWatcher, confirmationRoutine.TRIGGER, handleConfirmationSaga);
    testSaga(signInWatcher, signInRoutine.TRIGGER, handleSignInSaga);
    testSaga(signOutWatcher, signOutRoutine.TRIGGER, handleSignOutSaga);
    testSaga(signUpWatcher, signUpRoutine.TRIGGER, handleSignUpSaga);
});