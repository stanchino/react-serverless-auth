export default (user) => (
    new Promise((resolve, reject) => {
        user.globalSignOut({
            onSuccess: result => {
                user.signOut();
                user.clearCachedTokens();
                user.clearCachedDeviceKeyAndPassword();
                resolve(result);
            },
            onFailure: error => reject(error)
        });
    })
);