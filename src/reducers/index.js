import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer  } from "redux-form";

import auth from "./auth";

export default combineReducers({
  auth: auth,
  form: formReducer,
  router: routerReducer
});