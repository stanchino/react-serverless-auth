"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require("./utils");

exports.default = function (email, code) {
    return new Promise(function (resolve, reject) {
        (0, _utils.cognitoUser)(email).confirmRegistration(code, false, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};