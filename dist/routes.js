"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  signIn: process.env.REACT_APP_AUTH_LOGIN_URL || "/auth/login",
  confirm: process.env.REACT_APP_AUTH_CONFIRM_URL || "/auth/confirm",
  register: process.env.REACT_APP_AUTH_REGISTER_URL || "/auth/register",
  reset: process.env.REACT_APP_AUTH_RESET_URL || "/auth/reset"
};