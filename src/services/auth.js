import { currentUser } from "./utils"

export default () => (
    new Promise((resolve, reject) => {
        if (null === currentUser) {
            resolve(null);
        }
        currentUser.getSession(error => {
            if (error) {
                reject(error);
            } else {
                resolve(currentUser);
            }
        });
    })
);