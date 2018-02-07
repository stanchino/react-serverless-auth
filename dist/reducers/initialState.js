'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.flash = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flash = exports.flash = { flash: { error: null, notice: null } };

var initialState = exports.initialState = (0, _extends3.default)({
  loading: false,
  isLoggedIn: false,
  isRegistered: false,
  passwordResetRequested: false,
  profile: null,
  pathname: '/',
  user: null
}, flash);