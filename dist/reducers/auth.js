"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _index = require("../actions/index");

var _initialState = require("./initialState");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState.initialState;
    var action = arguments[1];

    switch (action.type) {
        case _index.authRoutine.REQUEST:
            return (0, _extends3.default)({}, state, { loading: true });
        case _index.authRoutine.SUCCESS:
            return (0, _extends3.default)({}, state, { isLoggedIn: true, isRegistered: true }, action.payload);
        case _index.authRoutine.FAILURE:
            return (0, _extends3.default)({}, state, { isLoggedIn: false }, action.payload);
        case _index.authRoutine.FULFILL:
            return (0, _extends3.default)({}, state, { loading: false });
        default:
            return state;
    }
};