import { cognitoUser } from "./utils";

export default (email, code) => (
  new Promise((resolve, reject) => {
    cognitoUser(email).confirmRegistration(code, false, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
);