"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require("../actions");

var _initialState = require("./initialState");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState.initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.resendConfirmationCodeRoutine.REQUEST:
      return (0, _extends3.default)({}, state, { loading: true }, _initialState.flash);
    case _actions.resendConfirmationCodeRoutine.SUCCESS:
      return (0, _extends3.default)({}, state, { flash: { notice: action.payload } });
    case _actions.resendConfirmationCodeRoutine.FAILURE:
      return (0, _extends3.default)({}, state, { flash: { error: action.payload } });
    case _actions.resendConfirmationCodeRoutine.FULFILL:
      return (0, _extends3.default)({}, state, { loading: false });
    default:
      return state;
  }
};