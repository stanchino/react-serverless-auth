export default (user, verificationCode, newPassword) => (
    new Promise((resolve, reject) => {
        user.confirmPassword(verificationCode, newPassword, {
            onSuccess: data => resolve({ user: user, data: data }),
            onFailure: error => reject(error)
        })
    })
);