"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routerSelector = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.handleSignInSaga = handleSignInSaga;

var _effects = require("redux-saga/effects");

var _reactRouterRedux = require("react-router-redux");

var _ = require("..");

var _actions = require("../actions");

var _services = require("../services");

var _2 = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handleSignInSaga);

var routerSelector = exports.routerSelector = function routerSelector(state) {
    return state.router;
};

function handleSignInSaga(_ref) {
    var values = _ref.payload.values;

    var user, email, password, _ref2, pathname;

    return _regenerator2.default.wrap(function handleSignInSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    user = void 0;
                    email = values.email, password = values.password;
                    _context.next = 4;
                    return (0, _effects.select)(routerSelector);

                case 4:
                    _ref2 = _context.sent;
                    pathname = _ref2.location.pathname;
                    _context.prev = 6;
                    _context.next = 9;
                    return (0, _effects.put)(_actions.signInRoutine.request({ profile: { email: email, password: password } }));

                case 9:
                    _context.next = 11;
                    return (0, _effects.call)(_services.signInRequest, email, password);

                case 11:
                    user = _context.sent;
                    _context.next = 14;
                    return (0, _effects.put)(_actions.signInRoutine.success({ user: user }));

                case 14:
                    _context.next = 16;
                    return (0, _effects.put)(_actions.authRoutine.trigger());

                case 16:
                    _context.next = 31;
                    break;

                case 18:
                    _context.prev = 18;
                    _context.t0 = _context["catch"](6);

                    if (!("UserNotConfirmedException" === _context.t0.code)) {
                        _context.next = 27;
                        break;
                    }

                    _context.next = 23;
                    return (0, _effects.put)(_actions.signUpRoutine.success({ profile: { email: email, password: password }, flash: { error: _context.t0.message }, pathname: pathname }));

                case 23:
                    _context.next = 25;
                    return (0, _effects.put)((0, _reactRouterRedux.replace)(_.authRoutes.confirm));

                case 25:
                    _context.next = 29;
                    break;

                case 27:
                    _context.next = 29;
                    return (0, _2.formError)(_actions.signInRoutine, {
                        email: "Invalid user.",
                        _error: _context.t0.message
                    });

                case 29:
                    _context.next = 31;
                    return (0, _effects.put)(_actions.signInRoutine.fulfill());

                case 31:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[6, 18]]);
}