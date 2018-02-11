"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.currentUser = exports.cognitoUser = exports.userPool = undefined;

var _amazonCognitoIdentityJs = require("amazon-cognito-identity-js");

var userPool = exports.userPool = new _amazonCognitoIdentityJs.CognitoUserPool({
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
});

var cognitoUser = exports.cognitoUser = function cognitoUser(username) {
    var userData = {
        Username: username,
        Pool: userPool
    };

    return new _amazonCognitoIdentityJs.CognitoUser(userData);
};

var currentUser = exports.currentUser = userPool.getCurrentUser();