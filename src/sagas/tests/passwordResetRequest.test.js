import { call, put } from "redux-saga/effects";
import sagaHelper from "redux-saga-testing";

import {passwordResetRequestRoutine, resendConfirmationCodeRoutine} from "../../actions";
import { passwordResetRequest } from "../../services";
import { handlePasswordResetRequestSaga, routerSelector, authSelector, fetchEmail } from "../passwordResetRequest";

import { setupSaga, testServiceFailure, testSelector, verifyUnconfirmedAction, assertSelector } from "./shared-examples";

const initializeSaga = (values = { email: "john@doe.com" }) => (
    setupSaga(handlePasswordResetRequestSaga, { payload: { values: values } }, passwordResetRequestRoutine, it => {
      assertSelector(it, routerSelector, { location: { pathname: '/path' } });

      it("retrieves the email", result => {
        expect(result).toEqual(call(fetchEmail, values));
        return { email: "john@doe.com" };
      });
    }, { profile: { email: "john@doe.com" } })
);

const succeeds = (it, is_resend = false) => {
  const cognitoUser = jest.fn();

  it("calls passwordResetRequest", result => {
    expect(result).toEqual(call(passwordResetRequest, "john@doe.com"));
    return { user: cognitoUser, data: { details: 'data' } };
  });

  it("and then triggers the password request success action", result => {
    expect(result).toEqual(put(passwordResetRequestRoutine.success({ user: cognitoUser, details: 'data' })));
  });

  if (is_resend)
    it("then the resend confirmation success action", result => {
      expect(result).toEqual(put(resendConfirmationCodeRoutine.success('A new code was sent')));
    });

  it('and then fulfills the request', result => {
    expect(result).toEqual(put(passwordResetRequestRoutine.fulfill()));
  });

  it("and then nothing", result => {
    expect(result).toBeUndefined();
  });
}

describe("handlePasswordResetRequestSaga", () => {
  describe("When the request is successful", () => {
    succeeds(initializeSaga());
  });

  describe("when resend code is invoked", () => {
    succeeds(initializeSaga(null), true);
  });

  describe("When the user is not confirmed", () => {
    const it = initializeSaga();

    it("calls signInRequest", result => {
      let error = new Error("UserNotConfirmedException");
      error.code = "UserNotConfirmedException";
      expect(result).toEqual(call(passwordResetRequest, "john@doe.com"));
      return error;
    });

    verifyUnconfirmedAction(it, { email: "john@doe.com" }, passwordResetRequestRoutine);
  });

  testServiceFailure(initializeSaga, passwordResetRequest, passwordResetRequestRoutine, ["john@doe.com"]);
});

testSelector(routerSelector, { router: { location: { pathname: "path" } } }, { location: { pathname: "path" } });
testSelector(authSelector, { auth: { profile: { email: "john@doe.com" } } }, { profile: { email: "john@doe.com" } });

describe('fetchEmail', () => {
  describe("when the email is set", () => {
    const it = sagaHelper(fetchEmail({ email: 'john@doe.com' }));
    it("returns the values", result => {
      expect(result).toEqual({ email: 'john@doe.com' });
    });

    it("and then nothing", result => {
      expect(result).toBeUndefined();
    });
  });

  describe("when the email is not set", () => {
    const it = sagaHelper(fetchEmail());
    assertSelector(it, authSelector, { profile: { email: 'john@doe.com' } });

    it("and then returns the profile", result => {
      expect(result).toEqual({ email: 'john@doe.com' });
    });
  });
});