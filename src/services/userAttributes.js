export default (user) => (
    new Promise((resolve, reject) => {
        user.getUserAttributes((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(Object.assign(...result.map(attr => ({ [attr.getName()]: attr.getValue() }))));
            }
        });
    })
);