"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authSelector = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.handleConfirmRegistrationSaga = handleConfirmRegistrationSaga;

var _effects = require("redux-saga/effects");

var _reactRouterRedux = require("react-router-redux");

var _actions = require("../actions");

var _services = require("../services");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handleConfirmRegistrationSaga);

var authSelector = exports.authSelector = function authSelector(state) {
    return state.auth;
};

function handleConfirmRegistrationSaga(_ref) {
    var code = _ref.payload.values.code;

    var _ref2, _ref2$profile, email, password, pathname;

    return _regenerator2.default.wrap(function handleConfirmRegistrationSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.select)(authSelector);

                case 2:
                    _ref2 = _context.sent;
                    _ref2$profile = _ref2.profile;
                    email = _ref2$profile.email;
                    password = _ref2$profile.password;
                    pathname = _ref2.pathname;
                    _context.prev = 7;
                    _context.next = 10;
                    return (0, _effects.put)(_actions.confirmRegistrationRoutine.request());

                case 10:
                    _context.next = 12;
                    return (0, _effects.call)(_services.confirmRegistrationRequest, email, code);

                case 12:
                    _context.next = 14;
                    return (0, _effects.put)(_actions.signInRoutine.trigger({ values: { email: email, password: password } }));

                case 14:
                    _context.next = 16;
                    return (0, _effects.put)((0, _reactRouterRedux.replace)(pathname));

                case 16:
                    _context.next = 24;
                    break;

                case 18:
                    _context.prev = 18;
                    _context.t0 = _context["catch"](7);
                    _context.next = 22;
                    return (0, _.formError)(_actions.confirmRegistrationRoutine, {
                        code: "Invalid code",
                        _error: _context.t0.message
                    });

                case 22:
                    _context.next = 24;
                    return (0, _effects.put)(_actions.confirmRegistrationRoutine.fulfill());

                case 24:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[7, 18]]);
}