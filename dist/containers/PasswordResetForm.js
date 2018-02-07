"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactRedux = require("react-redux");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordResetContainer = function PasswordResetContainer(_ref) {
    var passwordResetRequested = _ref.passwordResetRequested,
        requestForm = _ref.requestForm,
        confirmationForm = _ref.confirmationForm,
        props = (0, _objectWithoutProperties3.default)(_ref, ["passwordResetRequested", "requestForm", "confirmationForm"]);
    return passwordResetRequested ? (0, _helpers.elementOrCreate)((0, _extends3.default)({ component: confirmationForm }, props)) : (0, _helpers.elementOrCreate)((0, _extends3.default)({ component: requestForm }, props));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        passwordResetRequested: state.auth.passwordResetRequested
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PasswordResetContainer);