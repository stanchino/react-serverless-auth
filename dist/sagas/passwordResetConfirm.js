"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authSelector = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.handlePasswordResetConfirmSaga = handlePasswordResetConfirmSaga;

var _effects = require("redux-saga/effects");

var _actions = require("../actions");

var _services = require("../services");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handlePasswordResetConfirmSaga);

var authSelector = exports.authSelector = function authSelector(state) {
    return state.auth;
};

function handlePasswordResetConfirmSaga(_ref) {
    var values = _ref.payload.values;

    var code, password, _ref2, user, email;

    return _regenerator2.default.wrap(function handlePasswordResetConfirmSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    code = values.code, password = values.password;
                    _context.next = 3;
                    return (0, _effects.select)(authSelector);

                case 3:
                    _ref2 = _context.sent;
                    user = _ref2.user;
                    email = _ref2.profile.email;
                    _context.prev = 6;
                    _context.next = 9;
                    return (0, _effects.put)(_actions.passwordResetConfirmRoutine.request());

                case 9:
                    _context.next = 11;
                    return (0, _effects.call)(_services.passwordResetConfirm, user, code, password);

                case 11:
                    _context.next = 13;
                    return (0, _effects.put)(_actions.signInRoutine.trigger({ values: { email: email, password: password } }));

                case 13:
                    _context.next = 19;
                    break;

                case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](6);
                    _context.next = 19;
                    return (0, _.formError)(_actions.passwordResetConfirmRoutine, { _error: _context.t0.message });

                case 19:
                    _context.prev = 19;
                    _context.next = 22;
                    return (0, _effects.put)(_actions.passwordResetConfirmRoutine.fulfill());

                case 22:
                    return _context.finish(19);

                case 23:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[6, 15, 19, 23]]);
}