import { signOutRoutine } from "../actions";

import { initialState, flash } from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case signOutRoutine.REQUEST:
      return { ...state, loading: true, ...flash, ...action.payload };
    case signOutRoutine.FULFILL:
      return initialState;
    default:
      return state;
  }
};