"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var message = _ref.message,
        style = _ref.style;
    return message ? _react2.default.createElement(
        "div",
        { style: style },
        _react2.default.createElement(
            "strong",
            null,
            message
        )
    ) : null;
};