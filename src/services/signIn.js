import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { cognitoUser } from "./utils";

export default (username, password) => {

    const authenticationDetails = new AuthenticationDetails({
        Username: username,
        Password: password
    });

    const user = cognitoUser(username);

    return new Promise((resolve, reject) => {
        user.authenticateUser(authenticationDetails, {
            onSuccess: () => resolve(user),
            onFailure: error => reject(error)
        })
    })
};