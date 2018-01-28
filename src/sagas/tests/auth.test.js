import { call, put } from "redux-saga/effects";
import { authRoutine } from "../../actions";
import { authRequest, userAttributes } from "../../services";

import { handleAuthSaga, getUser } from "../auth";
import { setupSelectSaga, testSelector, finalizeSaga } from "./shared-examples";

const authSuccess = result => {
    expect(result).toEqual(put(authRoutine.success({ user: "user", profile: "profile" })));
};

describe("handleAuthSaga", () => {
    describe("when the user signs in", () => {
        const it = setupSelectSaga(handleAuthSaga, undefined, authRoutine, getUser, 'user');

        it("calls userAttributes", result => {
            expect(result).toEqual(call(userAttributes, "user"));
            return "profile";
        });

        it("and then triggers the authRoutine success", authSuccess);

        finalizeSaga(it, authRoutine);
    });

    describe("when the user is already logged in", () => {
        const it = setupSelectSaga(handleAuthSaga, undefined, authRoutine, getUser, null);

        it("calls authRequest", result => {
            expect(result).toEqual(call(authRequest));
            return "user";
        });

        it("then calls userAttributes", result => {
            expect(result).toEqual(call(userAttributes, "user"));
            return "profile";
        });

        it("and then triggers the authRoutine success", authSuccess);

        finalizeSaga(it, authRoutine);
    });

    describe("when the user is not logged in", () => {
        const it = setupSelectSaga(handleAuthSaga, undefined, authRoutine, getUser, null);

        it("calls authRequest", result => {
            expect(result).toEqual(call(authRequest));
            return null;
        });

        finalizeSaga(it, authRoutine);
    });

    describe("when there is an error", () => {
        const it = setupSelectSaga(handleAuthSaga, undefined, authRoutine, getUser, null);

        it("calls authRequest", result => {
            expect(result).toEqual(call(authRequest));
            return new Error("error");
        });

        it("then triggers the failure action", result => {
            expect(result).toEqual(put(authRoutine.failure({ flash: { error: "error" } })));
        });

        finalizeSaga(it, authRoutine);
    });
});

testSelector(getUser, { auth: { user: "user" } }, "user");