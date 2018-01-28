import { expectCallbacks } from "./shared-examples";

const factory = (err, result) => ({
    CognitoUserPool: jest.fn(() => ({
        getCurrentUser: jest.fn()
    })),
    CognitoUser: jest.fn(() => ({
        confirmRegistration: (code, forceAliasCreation, callback) => {
            callback(err, result);
        }
    }))
});

describe("test confirmRegistration", () => {
    const subject = () => (require("../confirmRegistration").default);

    beforeEach(() => {
        jest.resetModules();
    });

    it ('confirms the user registration successfully', () => {
        const mocks = factory(null, { success: 'success'});
        jest.doMock("amazon-cognito-identity-js", () => (mocks));

        expect(subject()("john@doe.com", "code")).resolves.toEqual({ success: 'success'});
        expectCallbacks([mocks.CognitoUserPool, mocks.CognitoUser]);
    });

    it ('raises an error when the confirmRegistration fails', () => {
        const mocks = factory({ error: 'error'}, null);
        jest.doMock("amazon-cognito-identity-js", () => (mocks));

        expect(subject()("john@doe.com", "code")).rejects.toEqual({ error: 'error'});
        expectCallbacks([mocks.CognitoUserPool, mocks.CognitoUser]);
    });
});