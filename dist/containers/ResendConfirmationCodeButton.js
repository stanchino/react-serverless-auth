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

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResendConfirmationCode = function ResendConfirmationCode(_ref) {
  var loading = _ref.loading,
      isLoggedIn = _ref.isLoggedIn,
      children = _ref.children,
      actions = _ref.actions,
      formType = _ref.formType,
      submitting = _ref.form.submitting,
      props = (0, _objectWithoutProperties3.default)(_ref, ["loading", "isLoggedIn", "children", "actions", "formType", "form"]);
  return isLoggedIn || loading ? null : _react2.default.createElement(
    "button",
    (0, _extends3.default)({}, props, { type: "button", onClick: actions[formType], disabled: submitting }),
    children
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)({
      registration: _actions.resendConfirmationCodeRoutine,
      passwordReset: _actions.passwordResetRequestRoutine
    }, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn
  };
}, mapDispatchToProps)(ResendConfirmationCode);