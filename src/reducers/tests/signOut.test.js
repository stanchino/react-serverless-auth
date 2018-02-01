import reducer from "../signOut";
import { initialState } from "../initialState";
import { signOutRoutine } from "../../actions/index";

import { testAction } from "./shared-examples";

describe("auth reducer", () => {
    it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
    describe("for the signOutRoutine", () => {
        testAction(reducer, signOutRoutine.request(), {
            loading: true,
            flash: initialState.flash
        });
        testAction(reducer, signOutRoutine.fulfill(), initialState);
    });
});