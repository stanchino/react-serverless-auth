"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Message = require("./Message");

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var _ref$flash = _ref.flash,
        error = _ref$flash.error,
        notice = _ref$flash.notice;
    return _react2.default.createElement(
        "div",
        { className: "flash" },
        _react2.default.createElement(_Message2.default, { message: error, style: { color: "red" } }),
        _react2.default.createElement(_Message2.default, { message: notice, style: { color: "green" } })
    );
};