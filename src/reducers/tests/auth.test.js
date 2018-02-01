import reducer from "../auth";
import { initialState } from "../initialState";
import { authRoutine } from "../../actions/index";

import { behavesLikeReducerWithPayload } from "./shared-examples";

describe("auth reducer", () => {
    it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
    describe("for the authRoutine", () => behavesLikeReducerWithPayload(reducer, authRoutine, { isLoggedIn: true, isRegistered: true }, { isLoggedIn: false }, { loading: true }));
});