"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (user, verificationCode, newPassword) {
    return new Promise(function (resolve, reject) {
        user.confirmPassword(verificationCode, newPassword, {
            onSuccess: function onSuccess(data) {
                return resolve({ user: user, data: data });
            },
            onFailure: function onFailure(error) {
                return reject(error);
            }
        });
    });
};