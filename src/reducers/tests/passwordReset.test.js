import reducer from "../passwordReset";
import { initialState } from "../initialState";
import { passwordResetRequestRoutine } from "../../actions/index";

import { behavesLikeReducerWithPayload } from "./shared-examples";

describe("passwordReset reducer", () => {
  it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
  describe("for the passwordResetRequestRoutine", () => behavesLikeReducerWithPayload(reducer, passwordResetRequestRoutine, { passwordResetRequested: true }, { passwordResetRequested: false }));
});