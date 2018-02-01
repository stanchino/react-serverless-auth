import reduceReducers from "reduce-reducers";

import auth from "./auth";
import confirmRegistration from "./confirmRegistration";
import passwordReset from "./passwordReset";
import signIn from "./signIn";
import signOut from "./signOut";
import signUp from "./signUp";

export default reduceReducers(auth, confirmRegistration, passwordReset, signIn, signOut, signUp);