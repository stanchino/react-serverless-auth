import { call, put } from "redux-saga/effects";
import { replace } from "react-router-redux";

import { signUpRequest } from "../../services";
import { signUpRoutine, signInRoutine } from "../../actions";

import { handleSignUpSaga } from "../signUp";

import { finalizeSaga, setupSaga, testServiceFailure, testSignUpSuccess } from "./shared-examples";

const values = { email: "john@doe.com", password: "pass" };
const payload = { payload: { values: values } };

const initializeSaga = () => (
    setupSaga(handleSignUpSaga, payload, signUpRoutine, undefined, { profile: values })
);

describe("handleSignUpSaga", () => {
    describe("When the registration is successful", () => {
        const it = initializeSaga();

        it("calls signUpRequest", result => {
            expect(result).toEqual(call(signUpRequest, values.email, values.password));
        });

        it("and triggers the signUp success action", result => {
            testSignUpSuccess(result, { profile: { email: values.email, password: values.password } });
        });

        it("then redirects to the confirmRegistration URL", result => {
            expect(result).toEqual(put(replace("/auth/confirm")));
        });

        finalizeSaga(it, signUpRoutine);
    });

    testServiceFailure(initializeSaga, signUpRequest, signUpRoutine, [values.email, values.password]);

    describe("When the user already exists", () => {
        let error;
        const it = initializeSaga();

        it("calls signUpRequest", result => {
            error = new Error("Error UsernameExistsException");
            error.code = "UsernameExistsException";
            expect(result).toEqual(call(signUpRequest, values.email, values.password));
            return error;
        });

        it("then triggers the signInRoutine", result => {
            expect(result).toEqual(put(signInRoutine.trigger({ values: { email: values.email, password: values.password } })));
        });

        it("and triggers signUpRoutine success", result => {
            expect(result).toEqual(put(signUpRoutine.success({ profile: { email: values.email, password: values.password }, flash: { error: error.message } })))
        });

        it("and redirects to the login route", result => {
            expect(result).toEqual(put(replace("/auth/login")));
        });

        it("and then nothing", result => {
            expect(result).toBeUndefined();
        });
    });
});