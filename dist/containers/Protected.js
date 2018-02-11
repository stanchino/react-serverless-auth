"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactRedux = require("react-redux");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProtectedComponent = function ProtectedComponent(_ref) {
    var isLoggedIn = _ref.isLoggedIn,
        children = _ref.children,
        component = _ref.component,
        props = (0, _objectWithoutProperties3.default)(_ref, ["isLoggedIn", "children", "component"]);
    return isLoggedIn ? children : (0, _helpers.componentOrNull)(component, props);
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProtectedComponent);