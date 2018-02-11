"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelector = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.handleResendConfirmationCodeSaga = handleResendConfirmationCodeSaga;

var _effects = require("redux-saga/effects");

var _actions = require("../actions");

var _services = require("../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handleResendConfirmationCodeSaga);

var authSelector = exports.authSelector = function authSelector(state) {
  return state.auth;
};

function handleResendConfirmationCodeSaga() {
  var _ref, email;

  return _regenerator2.default.wrap(function handleResendConfirmationCodeSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(authSelector);

        case 2:
          _ref = _context.sent;
          email = _ref.profile.email;
          _context.prev = 4;
          _context.next = 7;
          return (0, _effects.put)(_actions.resendConfirmationCodeRoutine.request());

        case 7:
          _context.next = 9;
          return (0, _effects.call)(_services.resendConfirmationCode, email);

        case 9:
          _context.next = 11;
          return (0, _effects.put)(_actions.resendConfirmationCodeRoutine.success('A new code was sent'));

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](4);
          _context.next = 17;
          return (0, _effects.put)(_actions.resendConfirmationCodeRoutine.failure(_context.t0.message));

        case 17:
          _context.prev = 17;
          _context.next = 20;
          return (0, _effects.put)(_actions.resendConfirmationCodeRoutine.fulfill());

        case 20:
          return _context.finish(17);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[4, 13, 17, 21]]);
}