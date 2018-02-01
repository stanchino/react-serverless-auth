import reducer from "../signIn";
import { initialState } from "../initialState";
import { signInRoutine } from "../../actions";

import { behavesLikeReducerWithPayload } from "./shared-examples";

describe("signIn reducer", () => {
  it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
  describe("for the signInRoutine", () => behavesLikeReducerWithPayload(reducer, signInRoutine, { isRegistered: true }, {}));

});