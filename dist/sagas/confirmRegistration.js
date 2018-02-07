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

    var _ref2, profile, pathname, email, password;

    return _regenerator2.default.wrap(function handleConfirmRegistrationSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.select)(authSelector);

                case 2:
                    _ref2 = _context.sent;
                    profile = _ref2.profile;
                    pathname = _ref2.pathname;
                    email = profile.email, password = profile.password;
                    _context.prev = 6;
                    _context.next = 9;
                    return (0, _effects.put)(_actions.confirmRegistrationRoutine.request());

                case 9:
                    _context.next = 11;
                    return (0, _effects.call)(_services.confirmRegistrationRequest, email, code);

                case 11:
                    _context.next = 13;
                    return (0, _effects.put)(_actions.signInRoutine.trigger({ values: { email: email, password: password } }));

                case 13:
                    _context.next = 15;
                    return (0, _effects.put)((0, _reactRouterRedux.replace)(pathname));

                case 15:
                    _context.next = 23;
                    break;

                case 17:
                    _context.prev = 17;
                    _context.t0 = _context["catch"](6);
                    _context.next = 21;
                    return (0, _.formError)(_actions.confirmRegistrationRoutine, {
                        code: "Invalid code",
                        _error: _context.t0.message
                    });

                case 21:
                    _context.next = 23;
                    return (0, _effects.put)(_actions.confirmRegistrationRoutine.fulfill());

                case 23:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[6, 17]]);
}