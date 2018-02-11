"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authSelector = exports.routerSelector = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.fetchEmail = fetchEmail;
exports.handlePasswordResetRequestSaga = handlePasswordResetRequestSaga;

var _effects = require("redux-saga/effects");

var _reactRouterRedux = require("react-router-redux");

var _ = require("..");

var _actions = require("../actions");

var _services = require("../services");

var _2 = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(fetchEmail),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(handlePasswordResetRequestSaga);

var email_present = function email_present(hash) {
  return hash && hash.email;
};

var routerSelector = exports.routerSelector = function routerSelector(state) {
  return state.router;
};
var authSelector = exports.authSelector = function authSelector(state) {
  return state.auth;
};

function fetchEmail(values) {
  var _ref, profile;

  return _regenerator2.default.wrap(function fetchEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!email_present(values)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", values);

        case 4:
          _context.next = 6;
          return (0, _effects.select)(authSelector);

        case 6:
          _ref = _context.sent;
          profile = _ref.profile;
          return _context.abrupt("return", profile);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function handlePasswordResetRequestSaga(_ref2) {
  var values = _ref2.payload.values;

  var _ref3, pathname, _ref4, email, _ref5, user, data;

  return _regenerator2.default.wrap(function handlePasswordResetRequestSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)(routerSelector);

        case 2:
          _ref3 = _context2.sent;
          pathname = _ref3.location.pathname;
          _context2.next = 6;
          return (0, _effects.call)(fetchEmail, values);

        case 6:
          _ref4 = _context2.sent;
          email = _ref4.email;
          _context2.prev = 8;
          _context2.next = 11;
          return (0, _effects.put)(_actions.passwordResetRequestRoutine.request({ profile: { email: email } }));

        case 11:
          _context2.next = 13;
          return (0, _effects.call)(_services.passwordResetRequest, email);

        case 13:
          _ref5 = _context2.sent;
          user = _ref5.user;
          data = _ref5.data;
          _context2.next = 18;
          return (0, _effects.put)(_actions.passwordResetRequestRoutine.success((0, _extends3.default)({ user: user }, data)));

        case 18:
          if (email_present(values)) {
            _context2.next = 21;
            break;
          }

          _context2.next = 21;
          return (0, _effects.put)(_actions.resendConfirmationCodeRoutine.success('A new code was sent'));

        case 21:
          _context2.next = 34;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](8);

          if (!("UserNotConfirmedException" === _context2.t0.code)) {
            _context2.next = 32;
            break;
          }

          _context2.next = 28;
          return (0, _effects.put)(_actions.signUpRoutine.success({ profile: { email: email }, flash: { error: _context2.t0.message }, pathname: pathname }));

        case 28:
          _context2.next = 30;
          return (0, _effects.put)((0, _reactRouterRedux.replace)(_.authRoutes.confirm));

        case 30:
          _context2.next = 34;
          break;

        case 32:
          _context2.next = 34;
          return (0, _2.formError)(_actions.passwordResetRequestRoutine, {
            email: "Invalid user.",
            _error: _context2.t0.message
          });

        case 34:
          _context2.prev = 34;
          _context2.next = 37;
          return (0, _effects.put)(_actions.passwordResetRequestRoutine.fulfill());

        case 37:
          return _context2.finish(34);

        case 38:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[8, 23, 34, 38]]);
}