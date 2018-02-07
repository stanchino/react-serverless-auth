"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routerSelector = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.handlePasswordResetRequestSaga = handlePasswordResetRequestSaga;

var _effects = require("redux-saga/effects");

var _reactRouterRedux = require("react-router-redux");

var _ = require("..");

var _actions = require("../actions");

var _services = require("../services");

var _2 = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handlePasswordResetRequestSaga);

var routerSelector = exports.routerSelector = function routerSelector(state) {
    return state.router;
};

function handlePasswordResetRequestSaga(_ref) {
    var values = _ref.payload.values;

    var email, _ref2, pathname, _ref3, user, data;

    return _regenerator2.default.wrap(function handlePasswordResetRequestSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    email = values.email;
                    _context.next = 3;
                    return (0, _effects.select)(routerSelector);

                case 3:
                    _ref2 = _context.sent;
                    pathname = _ref2.location.pathname;
                    _context.prev = 5;
                    _context.next = 8;
                    return (0, _effects.put)(_actions.passwordResetRequestRoutine.request({ profile: { email: email } }));

                case 8:
                    _context.next = 10;
                    return (0, _effects.call)(_services.passwordResetRequest, email);

                case 10:
                    _ref3 = _context.sent;
                    user = _ref3.user;
                    data = _ref3.data;
                    _context.next = 15;
                    return (0, _effects.put)(_actions.passwordResetRequestRoutine.success((0, _extends3.default)({ user: user }, data)));

                case 15:
                    _context.next = 28;
                    break;

                case 17:
                    _context.prev = 17;
                    _context.t0 = _context["catch"](5);

                    if (!("UserNotConfirmedException" === _context.t0.code)) {
                        _context.next = 26;
                        break;
                    }

                    _context.next = 22;
                    return (0, _effects.put)(_actions.signUpRoutine.success({ profile: { email: email }, flash: { error: _context.t0.message }, pathname: pathname }));

                case 22:
                    _context.next = 24;
                    return (0, _effects.put)((0, _reactRouterRedux.replace)(_.authRoutes.confirm));

                case 24:
                    _context.next = 28;
                    break;

                case 26:
                    _context.next = 28;
                    return (0, _2.formError)(_actions.passwordResetRequestRoutine, {
                        email: "Invalid user.",
                        _error: _context.t0.message
                    });

                case 28:
                    _context.prev = 28;
                    _context.next = 31;
                    return (0, _effects.put)(_actions.passwordResetRequestRoutine.fulfill());

                case 31:
                    return _context.finish(28);

                case 32:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[5, 17, 28, 32]]);
}