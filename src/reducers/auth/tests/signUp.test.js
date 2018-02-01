import reducer from "../signUp";
import { initialState } from "../../initialState";
import { signUpRoutine } from "../../../actions";

import { behavesLikeReducerWithPayload } from "./shared-examples";

describe("signUp reducer", () => {
    it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
    describe("for the signUpRoutine", () => behavesLikeReducerWithPayload(reducer, signUpRoutine, { isRegistered: true }, { isRegistered: false }));
});