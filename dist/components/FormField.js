"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var input = _ref.input,
        label = _ref.label,
        placeholder = _ref.placeholder,
        type = _ref.type,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        props = (0, _objectWithoutProperties3.default)(_ref, ["input", "label", "placeholder", "type", "meta"]);
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "label",
            null,
            label
        ),
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("input", (0, _extends3.default)({}, input, { type: type, placeholder: placeholder }, props)),
            touched && error && _react2.default.createElement(
                "span",
                null,
                error
            )
        )
    );
};