import { signInRoutine } from "../actions";

import { initialState, flash } from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case signInRoutine.REQUEST:
      return { ...state, loading: true, ...flash, ...action.payload };
    case signInRoutine.SUCCESS:
      return { ...state, isRegistered: true, ...action.payload };
    case signInRoutine.FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};