const factory = assertion => ({
    CognitoUserPool: jest.fn(() => ({
        getCurrentUser: jest.fn()
    })),
    CognitoUser: jest.fn(() => ({
        forgotPassword: callbacks => {
            assertion(callbacks);
        }
    }))
});

describe("test passwordResetRequest", () => {
    const subject = () => (require("../passwordResetRequest").default);
    const expectCallbacks = (mock) => {
        expect(mock.CognitoUserPool).toHaveBeenCalled();
        expect(mock.CognitoUser).toHaveBeenCalled();
    };

    beforeEach(() => {
        jest.resetModules();
    });

    it ('requests code for password reset successfully', () => {
        const data = "Data";
        const mock = factory(callbacks => (
            callbacks.onSuccess(data)
        ));
        jest.doMock("amazon-cognito-identity-js", () => (mock));

        expect(subject()("user")).resolves.toHaveProperty("user");
        expect(subject()("user")).resolves.toHaveProperty("data", data);
        expectCallbacks(mock);
    });

    it ('rejects the promise when the request fails', () => {
        const mock = factory(callbacks => (
            callbacks.onFailure({ error: "error" })
        ));
        jest.doMock("amazon-cognito-identity-js", () => (mock));

        expect(subject()("user")).rejects.toEqual({ error: 'error' });
        expectCallbacks(mock);
    });
});