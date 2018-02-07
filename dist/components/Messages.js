"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Message = require("./Message");

var _Message2 = _interopRequireDefault(_Message);

var _Flash = require("../containers/Flash");

var _Flash2 = _interopRequireDefault(_Flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var error = _ref.error;
    return _react2.default.createElement(
        "div",
        { className: "messages" },
        !error && _react2.default.createElement(_Flash2.default, null),
        _react2.default.createElement(_Message2.default, { message: error, style: { color: "red" } })
    );
};