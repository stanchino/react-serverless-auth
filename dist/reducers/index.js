"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _reduxForm = require("redux-form");

var _reduceReducers = require("reduce-reducers");

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _auth = require("./auth");

var _auth2 = _interopRequireDefault(_auth);

var _confirmRegistration = require("./confirmRegistration");

var _confirmRegistration2 = _interopRequireDefault(_confirmRegistration);

var _passwordReset = require("./passwordReset");

var _passwordReset2 = _interopRequireDefault(_passwordReset);

var _signIn = require("./signIn");

var _signIn2 = _interopRequireDefault(_signIn);

var _signOut = require("./signOut");

var _signOut2 = _interopRequireDefault(_signOut);

var _signUp = require("./signUp");

var _signUp2 = _interopRequireDefault(_signUp);

var _resendConfirmationCode = require("./resendConfirmationCode");

var _resendConfirmationCode2 = _interopRequireDefault(_resendConfirmationCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: (0, _reduceReducers2.default)(_auth2.default, _confirmRegistration2.default, _passwordReset2.default, _signIn2.default, _signOut2.default, _signUp2.default, _resendConfirmationCode2.default),
  form: _reduxForm.reducer,
  router: _reactRouterRedux.routerReducer
});