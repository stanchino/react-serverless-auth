import { expectCallbacks } from "./shared-examples";

const factory = (err, result) => ({
  CognitoUserPool: jest.fn(() => ({
    getCurrentUser: jest.fn()
  })),
  CognitoUser: jest.fn(() => ({
    resendConfirmationCode: (callback) => {
      callback(err, result);
    }
  }))
});

describe("test resendConfirmationCode", () => {
  const subject = () => (require("../resendConfirmationCode").default);

  beforeEach(() => {
    jest.resetModules();
  });

  it ('resends the confirmation code successfully', () => {
    const mocks = factory(null, { success: 'success'});
    jest.doMock("amazon-cognito-identity-js", () => (mocks));

    expect(subject()()).resolves.toEqual({ success: 'success'});
    expectCallbacks([mocks.CognitoUserPool, mocks.CognitoUser]);
  });

  it ('raises an error when the resend action fails', () => {
    const mocks = factory({ error: 'error'}, null);
    jest.doMock("amazon-cognito-identity-js", () => (mocks));

    expect(subject()()).rejects.toEqual({ error: 'error'});
    expectCallbacks([mocks.CognitoUserPool, mocks.CognitoUser]);
  });
});