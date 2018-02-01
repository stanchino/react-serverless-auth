import { confirmRegistrationRoutine } from "../../actions";

import { initialState, flash } from "../initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case confirmRegistrationRoutine.REQUEST:
      return { ...state, loading: true, ...flash, ...action.payload };
    case confirmRegistrationRoutine.FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};