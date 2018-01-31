import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js"

export const userPool = new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID
});

export const cognitoUser = username => {
    const userData = {
        Username: username,
        Pool: userPool
    };

    return new CognitoUser(userData);
};

export const currentUser = userPool.getCurrentUser();