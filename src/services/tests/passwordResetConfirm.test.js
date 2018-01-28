const subject = require("../passwordResetConfirm").default;

describe("test passwordResetConfirm", () => {
    const user = assertion => ({
        confirmPassword: (code, password, callbacks) => {
            assertion(callbacks);
        }
    });

    it ('resets the password successfully', () => {
        const data = "Data";
        const mock = callbacks => (
            callbacks.onSuccess(data)
        );

        expect(subject(user(mock), "code", "newPass")).resolves.toHaveProperty("user");
        expect(subject(user(mock), "code", "newPass")).resolves.toHaveProperty("data", data);
    });

    it ('rejects the promise when the request fails', () => {
        const mock = callbacks => (
            callbacks.onFailure({ error: "error" })
        );

        expect(subject(user(mock))).rejects.toEqual({ error: 'error' });
    });
});