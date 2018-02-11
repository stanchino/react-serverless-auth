"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.handleSignUpSaga = handleSignUpSaga;

var _effects = require("redux-saga/effects");

var _reactRouterRedux = require("react-router-redux");

var _ = require("..");

var _actions = require("../actions");

var _services = require("../services");

var _2 = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handleSignUpSaga);

function handleSignUpSaga(_ref) {
    var values = _ref.payload.values;
    var email, password;
    return _regenerator2.default.wrap(function handleSignUpSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    email = values.email, password = values.password;
                    _context.prev = 1;
                    _context.next = 4;
                    return (0, _effects.put)(_actions.signUpRoutine.request({ profile: values }));

                case 4:
                    _context.next = 6;
                    return (0, _effects.call)(_services.signUpRequest, email, password);

                case 6:
                    _context.next = 8;
                    return (0, _effects.put)(_actions.signUpRoutine.success({ profile: { email: email, password: password } }));

                case 8:
                    _context.next = 10;
                    return (0, _effects.put)((0, _reactRouterRedux.replace)(_.authRoutes.confirm));

                case 10:
                    _context.next = 12;
                    return (0, _effects.put)(_actions.signUpRoutine.fulfill());

                case 12:
                    _context.next = 29;
                    break;

                case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](1);

                    if (!("UsernameExistsException" === _context.t0.code)) {
                        _context.next = 25;
                        break;
                    }

                    _context.next = 19;
                    return (0, _effects.put)(_actions.signInRoutine.trigger({ values: { email: email, password: password } }));

                case 19:
                    _context.next = 21;
                    return (0, _effects.put)(_actions.signUpRoutine.success({ profile: { email: email, password: password }, flash: { error: _context.t0.message } }));

                case 21:
                    _context.next = 23;
                    return (0, _effects.put)((0, _reactRouterRedux.replace)(_.authRoutes.signIn));

                case 23:
                    _context.next = 29;
                    break;

                case 25:
                    _context.next = 27;
                    return (0, _2.formError)(_actions.signUpRoutine, { _error: _context.t0.message });

                case 27:
                    _context.next = 29;
                    return (0, _effects.put)(_actions.signUpRoutine.fulfill());

                case 29:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[1, 14]]);
}