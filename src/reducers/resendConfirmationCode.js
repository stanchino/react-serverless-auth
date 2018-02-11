import { resendConfirmationCodeRoutine } from "../actions";

import { initialState, flash } from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case resendConfirmationCodeRoutine.REQUEST:
      return { ...state, loading: true, ...flash};
    case resendConfirmationCodeRoutine.SUCCESS:
      return { ...state, flash: { notice: action.payload } };
    case resendConfirmationCodeRoutine.FAILURE:
      return { ...state, flash: { error: action.payload } };
    case resendConfirmationCodeRoutine.FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};