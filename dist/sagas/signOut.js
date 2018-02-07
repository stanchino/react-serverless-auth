"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authSelector = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.handleSignOutSaga = handleSignOutSaga;

var _effects = require("redux-saga/effects");

var _actions = require("../actions");

var _services = require("../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(handleSignOutSaga);

var authSelector = exports.authSelector = function authSelector(state) {
    return state.auth;
};

function handleSignOutSaga() {
    var _ref, user;

    return _regenerator2.default.wrap(function handleSignOutSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.select)(authSelector);

                case 2:
                    _ref = _context.sent;
                    user = _ref.user;
                    _context.prev = 4;
                    _context.next = 7;
                    return (0, _effects.put)(_actions.signOutRoutine.request());

                case 7:
                    if (!user) {
                        _context.next = 10;
                        break;
                    }

                    _context.next = 10;
                    return (0, _effects.call)(_services.signOutRequest, user);

                case 10:
                    _context.prev = 10;
                    _context.next = 13;
                    return (0, _effects.put)(_actions.signOutRoutine.fulfill());

                case 13:
                    return _context.finish(10);

                case 14:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this, [[4,, 10, 14]]);
}