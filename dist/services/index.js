"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userAttributes = exports.signOutRequest = exports.signUpRequest = exports.signInRequest = exports.passwordResetRequest = exports.passwordResetConfirm = exports.confirmRegistrationRequest = exports.authRequest = undefined;

var _auth = require("./auth");

var _auth2 = _interopRequireDefault(_auth);

var _confirmRegistration = require("./confirmRegistration");

var _confirmRegistration2 = _interopRequireDefault(_confirmRegistration);

var _passwordResetRequest = require("./passwordResetRequest");

var _passwordResetRequest2 = _interopRequireDefault(_passwordResetRequest);

var _passwordResetConfirm = require("./passwordResetConfirm");

var _passwordResetConfirm2 = _interopRequireDefault(_passwordResetConfirm);

var _signIn = require("./signIn");

var _signIn2 = _interopRequireDefault(_signIn);

var _signOut = require("./signOut");

var _signOut2 = _interopRequireDefault(_signOut);

var _signUp = require("./signUp");

var _signUp2 = _interopRequireDefault(_signUp);

var _userAttributes = require("./userAttributes");

var _userAttributes2 = _interopRequireDefault(_userAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.authRequest = _auth2.default;
exports.confirmRegistrationRequest = _confirmRegistration2.default;
exports.passwordResetConfirm = _passwordResetConfirm2.default;
exports.passwordResetRequest = _passwordResetRequest2.default;
exports.signInRequest = _signIn2.default;
exports.signUpRequest = _signUp2.default;
exports.signOutRequest = _signOut2.default;
exports.userAttributes = _userAttributes2.default;