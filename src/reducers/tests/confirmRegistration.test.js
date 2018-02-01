import reducer from "../confirmRegistration";
import { initialState } from "../initialState";
import { confirmRegistrationRoutine } from "../../actions/index";

import { behavesLikeReducerWithoutPayload } from "./shared-examples";

describe("auth reducer", () => {
    it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
    describe("for the confirmRegistrationRoutine", () => behavesLikeReducerWithoutPayload(reducer, confirmRegistrationRoutine, {}, {}));
});