import { call, put } from "redux-saga/effects";
import { signInRoutine, authRoutine } from "../../actions";
import { signInRequest } from "../../services";
import { handleSignInSaga, routerSelector } from "../signIn";

import { setupSelectSaga, testServiceFailure, testSelector, verifyUnconfirmedAction } from "./shared-examples";

const values = { email: "user", password: "pass" };
const payload = { payload: { values: values } };

const initializeSaga = () => (
    setupSelectSaga(handleSignInSaga, payload, signInRoutine, routerSelector, { location: { pathname: '/path' } }, { profile: values })
);

describe("handleSignInSaga", () => {
    describe("When authentication is successful", () => {
        const it = initializeSaga();
        const cognitoUser = jest.fn();

        it("calls loginRequest", result => {
            expect(result).toEqual(call(signInRequest, values.email, values.password));
            return cognitoUser;
        });

        it("and then triggers the login success action", result => {
            expect(result).toEqual(put(signInRoutine.success({ user: cognitoUser })));
        });

        it("and triggers the authRoutine", result => {
            expect(result).toEqual(put(authRoutine.trigger()));
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
            expect(result).toEqual(call(signInRequest, values.email, values.password));
            return error;
        });

        verifyUnconfirmedAction(it, values, signInRoutine);
        /*
        it("and then triggers a signUp success action", result => {
            expect(result).toEqual(put(signUpRoutine.success({ profile: values, flash: { error: "UserNotConfirmedException" }, pathname: "/path" })));
        });

        it("then redirects to the confirmRegistration page", result => {
            expect(result).toEqual(put(replace("/auth/confirm")));
        });

        finalizeSaga(it, signInRoutine);
        */
    });

    testServiceFailure(initializeSaga, signInRequest, signInRoutine, [values.email, values.password]);
});

testSelector(routerSelector, { router: { location: { pathname: "path" } } }, { location: { pathname: "path" } });