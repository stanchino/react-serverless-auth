"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectForm = require("./connectForm");

var _actions = require("../actions");

exports.default = (0, _connectForm.connectForm)({ form: "passwordResetConfirmation", onSubmit: _actions.passwordResetConfirm });