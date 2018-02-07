"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require("react-redux");

var _FlashMessages = require("../components/FlashMessages");

var _FlashMessages2 = _interopRequireDefault(_FlashMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        flash: state.auth.flash
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_FlashMessages2.default);