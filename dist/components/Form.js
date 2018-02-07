"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Messages = require("./Messages");

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var children = _ref.children,
        loading = _ref.loading,
        onSubmit = _ref.onSubmit,
        form = _ref.form,
        className = _ref.className;
    return loading ? "Loading..." : _react2.default.createElement(
        "form",
        { onSubmit: form.handleSubmit(onSubmit), className: className },
        _react2.default.createElement(_Messages2.default, { error: form.error }),
        _react2.default.Children.map(children, function (child) {
            return _react2.default.cloneElement(child, { form: form });
        })
    );
};