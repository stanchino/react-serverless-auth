"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _connectForm = require("./connectForm");

var _reactRedux = require("react-redux");

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedForm = (0, _connectForm.connectForm)({ form: "confirmRegistration", onSubmit: _actions.confirmRegistration });

var ConfirmRegistrationForm = function ConfirmRegistrationForm(_ref) {
  var profile = _ref.profile,
      noEmail = _ref.noEmail,
      props = (0, _objectWithoutProperties3.default)(_ref, ["profile", "noEmail"]);
  return profile && profile.email ? _react2.default.createElement(ConnectedForm, props) : noEmail;
};

var mapStateToProps = function mapStateToProps(state) {
  return state.auth;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ConfirmRegistrationForm);