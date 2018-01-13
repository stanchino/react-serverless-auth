import reducer, { initialState } from "../auth";
import { signUpRoutine, confirmationRoutine, signInRoutine, authRoutine, signOutRoutine } from "../../actions";

const testAction = (reducer, action, expectedState) => {
    it(`should handle ${action.type}`, () => {
        expect(reducer({}, action)).toEqual(expectedState);
    });
};

const behavesLikeReducerWithPayload = (routine, success, failure, initial = initialState) => {
    testAction(reducer, routine.request(), {
        loading: true,
        flash: initial.flash
    });

    testAction(reducer, routine.success({ profile: 'payload' }), {
        ...success,
        profile: 'payload'
    });

    testAction(reducer, routine.failure(), failure);

    testAction(reducer, routine.fulfill(), {
        loading: false
    });
};

const behavesLikeReducerWithoutPayload = (routine, success, failure) => {
    testAction(reducer, routine.request(), {
        loading: true,
        flash: initialState.flash
    });

    testAction(reducer, routine.success(), success);

    testAction(reducer, routine.failure(), failure);

    testAction(reducer, routine.fulfill(), {
        loading: false
    });
};

describe("auth reducer", () => {
    it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
    describe("for the signUpRoutine", () => behavesLikeReducerWithPayload(signUpRoutine, { isRegistered: true }, { isRegistered: false }));
    describe("for the confirmationRoutine", () => behavesLikeReducerWithoutPayload(confirmationRoutine, {}, {}));
    describe("for the signUpRoutine", () => behavesLikeReducerWithPayload(signInRoutine, { isRegistered: true }, {}));
    describe("for the authRoutine", () => behavesLikeReducerWithPayload(authRoutine, { isLoggedIn: true, isRegistered: true }, { isLoggedIn: false }, { loading: true }));
    describe("for the signOutRoutine", () => {
        testAction(reducer, signOutRoutine.request(), {
            loading: true,
            flash: initialState.flash
        });
        testAction(reducer, signOutRoutine.fulfill(), initialState);
    });
});