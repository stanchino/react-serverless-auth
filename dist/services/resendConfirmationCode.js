"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require("./utils");

exports.default = function (email) {
  return new Promise(function (resolve, reject) {
    (0, _utils.cognitoUser)(email).resendConfirmationCode(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};