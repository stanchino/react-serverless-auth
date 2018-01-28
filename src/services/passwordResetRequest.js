import { cognitoUser } from "./utils";

export default username => {

    const user = cognitoUser(username);

    return new Promise((resolve, reject) => {
        user.forgotPassword({
            onSuccess: data => resolve({ user: user, data: data }),
            onFailure: error => reject(error),
            inputVerificationCode: null
        })
    })
};