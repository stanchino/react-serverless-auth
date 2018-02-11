"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (user) {
    return new Promise(function (resolve, reject) {
        user.globalSignOut({
            onSuccess: function onSuccess(result) {
                user.signOut();
                user.clearCachedTokens();
                user.clearCachedDeviceKeyAndPassword();
                resolve(result);
            },
            onFailure: function onFailure(error) {
                return reject(error);
            }
        });
    });
};