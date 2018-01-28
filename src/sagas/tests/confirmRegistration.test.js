import { call, put } from "redux-saga/effects";
import { replace } from "react-router-redux";
import { confirmRegistrationRoutine, signInRoutine } from "../../actions";
import { confirmRegistrationRequest } from "../../services";

import { handleConfirmRegistrationSaga, authSelector } from "../confirmRegistration";
import { setupSelectSaga, testSelector, testServiceFailure } from "./shared-examples";

const values = { code: "1234" };
const payload = { payload: { values: values } };
const state = { profile: { email: "john@doe.com", password: "pass" }, pathname: "/path" };

const initializeSaga = () => (
    setupSelectSaga(handleConfirmRegistrationSaga, payload, confirmRegistrationRoutine, authSelector, state)
);

describe("handleConfirmRegistrationSaga", () => {
    describe("When confirmRegistration is successful", () => {
        const it = initializeSaga();

        it("calls confirmRegistrationRequest", result => {
            expect(result).toEqual(call(confirmRegistrationRequest, "john@doe.com", values.code));
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

    testServiceFailure(initializeSaga, confirmRegistrationRequest, confirmRegistrationRoutine, ["john@doe.com", values.code]);
});

testSelector(authSelector, { auth: state }, state);