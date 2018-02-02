import { call, put, select } from "redux-saga/effects";
import { SubmissionError } from "redux-form";
import { replace } from "react-router-redux";
import sagaHelper from "redux-saga-testing";

import { authRoutes } from "../..";
import { signUpRoutine } from "../../actions";

export const setupSaga = (saga, payload, routine, beforeRequest, requestPayload) => {
    const it = sagaHelper(saga(payload));

    beforeRequest && beforeRequest(it);

    it("triggers the request action", result => {
        expect(result).toEqual(put(routine.request(requestPayload)));
    });

    return it;
};

export const setupSelectSaga = (saga, payload, routine, selector, selection, requestPayload) => (
    setupSaga(saga, payload, routine, it => {
        it("retrieves the profile", result => {
            expect(result).toEqual(select(selector));
            return selection;
        });
    }, requestPayload)
);

export const finalizeSaga = (it, routine, payload = undefined) => {
    it("finally triggers the fulfill action", result => {
        expect(result).toEqual(put(routine.fulfill(payload)));
    });

    it("and then nothing", result => {
        expect(result).toBeUndefined();
    });
};

export const testSelector = (selector, state, expectedResult) => {
    describe("test selection", () => {
        it("extracts the data from the state", () => {
            expect(selector(state)).toEqual(expectedResult);
        });
    });
};

export const testServiceFailure = (initialize, request, routine, args, finalPayload) => {
    describe("When saga fails", () => {
        const it = initialize();

        it("calls the service request", result => {
            expect(result).toEqual(call(request, ...args));
            return new Error("Error in the request.");
        });

        it("and then triggers the failure action", result => {
            expect(result).toEqual(put(routine.failure(new SubmissionError())));
        });

        finalizeSaga(it, routine, finalPayload);
    });
};

export const testSignUpSuccess = (result, email) => {
    expect(result).toEqual(put(signUpRoutine.success(email)));
};

export const verifyUnconfirmedAction = (it, values, routine) => {
    it("and then triggers a signUp success action", result => {
        expect(result).toEqual(put(signUpRoutine.success({ profile: values, flash: { error: "UserNotConfirmedException" }, pathname: "/path" })));
    });

    it("then redirects to the confirmRegistration page", result => {
        expect(result).toEqual(put(replace(authRoutes.confirm)));
    });

    finalizeSaga(it, routine);
};