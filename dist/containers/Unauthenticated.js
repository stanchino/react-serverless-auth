"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require("react-redux");

var _helpers = require("../helpers");

var Component = function Component(_ref) {
    var isLoggedIn = _ref.isLoggedIn,
        loading = _ref.loading,
        children = _ref.children,
        _ref$loadingComponent = _ref.loadingComponent,
        loadingComponent = _ref$loadingComponent === undefined ? null : _ref$loadingComponent,
        _ref$component = _ref.component,
        component = _ref$component === undefined ? null : _ref$component;
    return loading ? loadingComponent : isLoggedIn ? (0, _helpers.componentOrNull)(component) : children;
};

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        loading: state.auth.loading,
        isLoggedIn: state.auth.isLoggedIn
    };
}, function () {
    return {};
})(Component);