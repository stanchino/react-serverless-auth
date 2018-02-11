"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authSelector = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.handleAuthSaga = handleAuthSaga;

var _effects = require("redux-saga/effects");

var _actions = require("../actions");

var _services = require("../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handleAuthSaga);

var authSelector = exports.authSelector = function authSelector(state) {
    return state.auth;
};

function handleAuthSaga() {
    var profile, _ref, user;

    return _regenerator2.default.wrap(function handleAuthSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    profile = void 0;
                    _context.next = 3;
                    return (0, _effects.select)(authSelector);

                case 3:
                    _ref = _context.sent;
                    user = _ref.user;
                    _context.prev = 5;
                    _context.next = 8;
                    return (0, _effects.put)(_actions.authRoutine.request());

                case 8:
                    if (!(null === user)) {
                        _context.next = 12;
                        break;
                    }

                    _context.next = 11;
                    return (0, _effects.call)(_services.authRequest);

                case 11:
                    user = _context.sent;

                case 12:
                    if (!user) {
                        _context.next = 18;
                        break;
                    }

                    _context.next = 15;
                    return (0, _effects.call)(_services.userAttributes, user);

                case 15:
                    profile = _context.sent;
                    _context.next = 18;
                    return (0, _effects.put)(_actions.authRoutine.success({ user: user, profile: profile }));

                case 18:
                    _context.next = 24;
                    break;

                case 20:
                    _context.prev = 20;
                    _context.t0 = _context["catch"](5);
                    _context.next = 24;
                    return (0, _effects.put)(_actions.authRoutine.failure({ flash: { error: _context.t0.message } }));

                case 24:
                    _context.prev = 24;
                    _context.next = 27;
                    return (0, _effects.put)(_actions.authRoutine.fulfill());

                case 27:
                    return _context.finish(24);

                case 28:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[5, 20, 24, 28]]);
}