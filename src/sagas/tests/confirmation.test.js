import { call, put } from "redux-saga/effects";
import { replace } from "react-router-redux";
import {confirmationRoutine, signInRoutine } from "../../actions";
import { confirmationRequest } from "../../services";

import { handleConfirmationSaga, auth } from "../confirmation";
import { setupSelectSaga, testSelector, testServiceFailure } from "./sharedExamples";

const values = { code: "1234" };
const payload = { payload: { values: values } };
const state = { profile: { email: "john@doe.com", password: "pass" }, pathname: "/path" };

const initializeSaga = () => (
    setupSelectSaga(handleConfirmationSaga, payload, confirmationRoutine, auth, state)
);

describe("handleConfirmationSaga", () => {
    describe("When confirmation is successful", () => {
        const it = initializeSaga();

        it("calls confirmationRequest", result => {
            expect(result).toEqual(call(confirmationRequest, "john@doe.com", values.code));
        });

        it("and then triggers the signInRoutine", result => {
            expect(result).toEqual(put(signInRoutine.trigger({ values: { email: "john@doe.com", password: "pass" } })));
        });

        it("then redirects to the login URL", result => {
            expect(result).toEqual(put(replace("/path")));
        });

        it("and then nothing", result => {
            expect(result).toBeUndefined();
        });
    });

    testServiceFailure(initializeSaga, confirmationRequest, confirmationRoutine, ["john@doe.com", values.code]);
});

testSelector(auth, { auth: state }, state);