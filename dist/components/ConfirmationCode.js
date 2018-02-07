"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require("redux-form");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({ component: _.FormField, type: "text", name: "code", placeholder: "Confirmation Code" }, props));
};