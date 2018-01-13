import { CognitoUserAttribute } from "amazon-cognito-identity-js"

import { userPool } from "./utils";

export default (email, password) => {
    const attributeList = [
        new CognitoUserAttribute({
            Name: "email",
            Value: email
        })
    ];
    return new Promise((resolve, reject) => {
        userPool.signUp(email, password, attributeList, null, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
};