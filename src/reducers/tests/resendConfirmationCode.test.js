import reducer from "../resendConfirmationCode";
import { initialState } from "../initialState";
import { resendConfirmationCodeRoutine } from "../../actions";

import { behavesLikeReducerWithoutPayload } from "./shared-examples";

describe("auth reducer", () => {
  it("should return the initial state", () => expect(reducer(undefined, {})).toEqual(initialState));
  describe("for the confirmRegistrationRoutine", () => behavesLikeReducerWithoutPayload(reducer, resendConfirmationCodeRoutine, { flash: { notice: undefined } }, { flash: { error: undefined } }));
});