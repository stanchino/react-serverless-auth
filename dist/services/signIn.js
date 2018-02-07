"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _amazonCognitoIdentityJs = require("amazon-cognito-identity-js");

var _utils = require("./utils");

exports.default = function (username, password) {

    var authenticationDetails = new _amazonCognitoIdentityJs.AuthenticationDetails({
        Username: username,
        Password: password
    });

    var user = (0, _utils.cognitoUser)(username);

    return new Promise(function (resolve, reject) {
        user.authenticateUser(authenticationDetails, {
            onSuccess: function onSuccess() {
                return resolve(user);
            },
            onFailure: function onFailure(error) {
                return reject(error);
            }
        });
    });
};