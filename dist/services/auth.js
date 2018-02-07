"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require("./utils");

exports.default = function () {
    return new Promise(function (resolve, reject) {
        if (null === _utils.currentUser) {
            resolve(null);
        }
        _utils.currentUser.getSession(function (error) {
            if (error) {
                reject(error);
            } else {
                resolve(_utils.currentUser);
            }
        });
    });
};