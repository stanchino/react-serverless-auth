import { call } from "redux-saga/effects";
import { signOutRoutine } from "../../actions";
import { signOutRequest } from "../../services";
import { handleSignOutSaga, getUser } from "../signOut";

import { finalizeSaga, setupSelectSaga, testSelector} from "./sharedExamples";


const initializeSaga = user => (
    setupSelectSaga(handleSignOutSaga, {}, signOutRoutine, getUser, user)
);

describe("handleSignOutSaga", () => {
    describe("When the user is present", () => {
        const user = jest.fn();
        const it = initializeSaga(user);

        it("calls signOutRequest", result => {
            expect(result).toEqual(call(signOutRequest, user));
        });

        finalizeSaga(it, signOutRoutine);
    });

    describe("When the user is missing", () => {
        const it = initializeSaga();

        finalizeSaga(it, signOutRoutine);
    });
});

testSelector(getUser, { auth: { user: 'user' } }, 'user');