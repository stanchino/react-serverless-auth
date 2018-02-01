import { signUpRoutine } from "../../actions";

import { initialState, flash } from "../initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case signUpRoutine.REQUEST:
      return { ...state, loading: true, ...flash, ...action.payload };
    case signUpRoutine.SUCCESS:
      return { ...state, isRegistered: true, ...action.payload };
    case signUpRoutine.FAILURE:
      return { ...state, isRegistered: false };
    case signUpRoutine.FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};