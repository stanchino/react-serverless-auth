import { cognitoUser } from "./utils";

export default (email) => (
  new Promise((resolve, reject) => {
    cognitoUser(email).resendConfirmationCode((err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
);