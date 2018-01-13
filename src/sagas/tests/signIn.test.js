import { call, put } from "redux-saga/effects";
import { replace } from "react-router-redux";
import { signInRoutine, signUpRoutine, authRoutine } from "../../actions";
import { signInRequest } from "../../services";
import { handleSignInSaga, location } from "../signIn";

import { finalizeSaga, setupSelectSaga, testServiceFailure, testSelector } from "./sharedExamples";

const values = { email: "user", password: "pass" };
const payload = { payload: { values: values } };

const initializeSaga = () => (
    setupSelectSaga(handleSignInSaga, payload, signInRoutine, location, { pathname: '/path' }, { profile: values })
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

        it("and then triggers a signUp success action", result => {
            expect(result).toEqual(put(signUpRoutine.success({ profile: values, flash: { error: "UserNotConfirmedException" }, pathname: "/path" })));
        });

        it("then redirects to the confirmation page", result => {
            expect(result).toEqual(put(replace("/auth/confirm")));
        });

        finalizeSaga(it, signInRoutine);
    });

    testServiceFailure(initializeSaga, signInRequest, signInRoutine, [values.email, values.password]);
});

testSelector(location, { router: { location: { pathname: "path" } } }, { pathname: "path" });