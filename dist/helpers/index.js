"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.componentOrNull = exports.elementOrCreate = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementOrCreate = function elementOrCreate(_ref) {
    var component = _ref.component,
        props = (0, _objectWithoutProperties3.default)(_ref, ["component"]);
    return _react2.default.isValidElement(component) ? component : _react2.default.createElement(component, (0, _extends3.default)({}, props));
};

exports.elementOrCreate = elementOrCreate;
var componentOrNull = exports.componentOrNull = function componentOrNull(component) {
    return component ? _react2.default.createElement(component) : null;
};