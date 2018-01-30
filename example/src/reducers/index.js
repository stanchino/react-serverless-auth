import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { authReducers } from "react-serverless-auth";

export default combineReducers({ ...authReducers, router: routerReducer });