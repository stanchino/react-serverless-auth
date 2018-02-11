"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectForm = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _reduxForm = require("redux-form");

var _reactRedux = require("react-redux");

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn,
    isRegistered: state.auth.isRegistered
  };
};

var connectForm = exports.connectForm = function connectForm(props) {
  return (0, _reduxForm.reduxForm)((0, _extends3.default)({ propNamespace: 'form' }, props))((0, _reactRedux.connect)(mapStateToProps)(_components.Form));
};