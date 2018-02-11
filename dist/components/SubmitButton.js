"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var children = _ref.children,
        _ref$form = _ref.form,
        pristine = _ref$form.pristine,
        submitting = _ref$form.submitting;
    return _react2.default.createElement(
        "button",
        { type: "submit", disabled: pristine || submitting },
        children
    );
};