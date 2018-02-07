"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require("./utils");

exports.default = function (username) {

    var user = (0, _utils.cognitoUser)(username);

    return new Promise(function (resolve, reject) {
        user.forgotPassword({
            onSuccess: function onSuccess(data) {
                return resolve({ user: user, data: data });
            },
            onFailure: function onFailure(error) {
                return reject(error);
            },
            inputVerificationCode: null
        });
    });
};