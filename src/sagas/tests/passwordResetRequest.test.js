import { call, put } from "redux-saga/effects";
import { passwordResetRequestRoutine } from "../../actions";
import { passwordResetRequest } from "../../services";
import { handlePasswordResetRequestSaga, routerSelector } from "../passwordResetRequest";

import { setupSelectSaga, testServiceFailure, testSelector, verifyUnconfirmedAction } from "./shared-examples";

const values = { email: "user" };
const payload = { payload: { values: values } };

const initializeSaga = () => (
    setupSelectSaga(handlePasswordResetRequestSaga, payload, passwordResetRequestRoutine, routerSelector, { location: { pathname: '/path' } }, { profile: values })
);

describe("handlePasswordResetRequestSaga", () => {
    describe("When the request is successful", () => {
        const it = initializeSaga();
        const cognitoUser = jest.fn();

        it("calls passwordResetRequest", result => {
            expect(result).toEqual(call(passwordResetRequest, values.email));
            return { user: cognitoUser, data: { details: 'data' } };
        });

        it("and then triggers the password request success action", result => {
            expect(result).toEqual(put(passwordResetRequestRoutine.success({ user: cognitoUser, details: 'data' })));
        });

        it('and then fulfills the request', result => {
            expect(result).toEqual(put(passwordResetRequestRoutine.fulfill()));
        });

        it("and then nothing", result => {
            expect(result).toBeUndefined();
        });
    });

    describe("When the user is not confirmed", () => {
        const it = initializeSaga();

        it("calls signInRequest", result => {
            let error = new Error("UserNotConfirmedException");
            error.code = "UserNotConfirmedException";
            expect(result).toEqual(call(passwordResetRequest, values.email));
            return error;
        });

        verifyUnconfirmedAction(it, values, passwordResetRequestRoutine);
        /*
        it("and then triggers a signUp success action", result => {
            expect(result).toEqual(put(signUpRoutine.success({ profile: values, flash: { error: "UserNotConfirmedException" }, pathname: "/path" })));
        });

        it("then redirects to the confirmRegistration page", result => {
            expect(result).toEqual(put(replace("/auth/confirm")));
        });

        finalizeSaga(it, passwordResetRequestRoutine);
        */
    });

    testServiceFailure(initializeSaga, passwordResetRequest, passwordResetRequestRoutine, [values.email]);
});

testSelector(routerSelector, { router: { location: { pathname: "path" } } }, { location: { pathname: "path" } });