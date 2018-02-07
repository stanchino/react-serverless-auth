"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require("react-redux");

var _helpers = require("../helpers");

var ProtectedComponent = function ProtectedComponent(_ref) {
    var isLoggedIn = _ref.isLoggedIn,
        children = _ref.children,
        component = _ref.component;
    return isLoggedIn ? children : (0, _helpers.componentOrNull)(component);
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProtectedComponent);