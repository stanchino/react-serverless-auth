import { passwordResetRequestRoutine } from "../actions/index";

import { initialState, flash } from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case passwordResetRequestRoutine.REQUEST:
      return { ...state, loading: true, ...flash, ...action.payload };
    case passwordResetRequestRoutine.SUCCESS:
      return { ...state, passwordResetRequested: true, ...action.payload };
    case passwordResetRequestRoutine.FAILURE:
      return { ...state, passwordResetRequested: false, ...action.payload };
    case passwordResetRequestRoutine.FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};