"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _amazonCognitoIdentityJs = require("amazon-cognito-identity-js");

var _utils = require("./utils");

exports.default = function (email, password) {
    var attributeList = [new _amazonCognitoIdentityJs.CognitoUserAttribute({
        Name: "email",
        Value: email
    })];
    return new Promise(function (resolve, reject) {
        _utils.userPool.signUp(email, password, attributeList, null, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};