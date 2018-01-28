import { call, put } from "redux-saga/effects";
import { passwordResetConfirmRoutine, signInRoutine } from "../../actions";
import { passwordResetConfirm } from "../../services";
import { handlePasswordResetConfirmSaga, authSelector } from "../passwordResetConfirm";

import { finalizeSaga, setupSelectSaga, testSelector, testServiceFailure } from "./shared-examples";

const user = jest.fn();

const values = { code: '1234', password: 'alabala123' };
const payload = { payload: { values: values } };

const initializeSaga = user => (
    setupSelectSaga(handlePasswordResetConfirmSaga, payload, passwordResetConfirmRoutine, authSelector, { user: user, profile: { email: 'john@doe.com' } })
);

describe("handlePasswordResetConfirmSaga", () => {
    describe("When the code is present", () => {
        const it = initializeSaga(user);

        it("calls passwordResetConfirm", result => {
            expect(result).toEqual(call(passwordResetConfirm, user, '1234', 'alabala123'));
        });

        it("and then triggers the signInRoutine", result => {
            expect(result).toEqual(put(signInRoutine.trigger({ values: { email: 'john@doe.com', password: values.password } } ) ));
        });

        finalizeSaga(it, passwordResetConfirmRoutine);
    });

    describe("When the password confirmation fails", () => {
        const initialze = () => initializeSaga(user);
        testServiceFailure(initialze, passwordResetConfirm, passwordResetConfirmRoutine, [user, values.code, values.password])
    });
});

testSelector(authSelector, { auth: { user: 'user' } }, { user: 'user' });