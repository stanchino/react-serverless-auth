const factory = user => ({
    CognitoUserPool: jest.fn(() => ({
        getCurrentUser: jest.fn(() => (user))
    }))
});

describe("test authRequest", () => {
    const subject = () => (require("../auth").default);

    beforeEach(() => {
        jest.resetModules();
    });

    it('when there is no current user', () => {
        const mock = factory(null);
        jest.doMock("amazon-cognito-identity-js", () => (mock));
        expect(subject()()).resolves.toEqual(null);
    });

    it('when there is an error', () => {
        const mock = factory({ getSession: callback => (callback('error')) });
        jest.doMock("amazon-cognito-identity-js", () => (mock));
        expect(subject()()).rejects.toEqual('error');
    });

    it('when the user is authenticated', () => {
        const user = { getSession: callback => (callback(undefined, 'session')) };
        const mock = factory(user);
        jest.doMock("amazon-cognito-identity-js", () => (mock));
        expect(subject()()).resolves.toEqual(user);
    });
});