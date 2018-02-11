"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (user) {
    return new Promise(function (resolve, reject) {
        user.getUserAttributes(function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(Object.assign.apply(Object, (0, _toConsumableArray3.default)(result.map(function (attr) {
                    return (0, _defineProperty3.default)({}, attr.getName(), attr.getValue());
                }))));
            }
        });
    });
};