import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer  } from "redux-form";
import reduceReducers from "reduce-reducers";

import auth from "./auth";
import confirmRegistration from "./confirmRegistration";
import passwordReset from "./passwordReset";
import signIn from "./signIn";
import signOut from "./signOut";
import signUp from "./signUp";
import resendConfirmationCode from "./resendConfirmationCode";

export default combineReducers({
  auth: reduceReducers(auth, confirmRegistration, passwordReset, signIn, signOut, signUp, resendConfirmationCode),
  form: formReducer,
  router: routerReducer
});