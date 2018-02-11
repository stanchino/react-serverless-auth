import { call, put } from "redux-saga/effects";
import { resendConfirmationCodeRoutine } from "../../actions";
import { resendConfirmationCode } from "../../services";

import { handleResendConfirmationCodeSaga, authSelector } from "../resendConfirmationCode";
import { setupSelectSaga, testSelector, finalizeSaga } from "./shared-examples";

const values = { code: "1234" };
const payload = { payload: { values: values } };
const state = { profile: { email: "john@doe.com", password: "pass" }, pathname: "/path" };

const initializeSaga = () => (
  setupSelectSaga(handleResendConfirmationCodeSaga, payload, resendConfirmationCodeRoutine, authSelector, state)
);

describe("handleResendConfirmationCodeSaga", () => {
  describe("When confirmRegistration is successful", () => {
    const it = initializeSaga();

    it("calls resendConfirmationCode", result => {
      expect(result).toEqual(call(resendConfirmationCode, "john@doe.com"));
    });

    it("and then triggers the success routine", result => {
      expect(result).toEqual(put(resendConfirmationCodeRoutine.success('A new code was sent')));
    });

    finalizeSaga(it, resendConfirmationCodeRoutine);
  });

  describe("When saga fails", () => {
    const it = initializeSaga();

    it("calls the service request", result => {
      expect(result).toEqual(call(resendConfirmationCode, "john@doe.com"));
      return new Error("Error in the request.");
    });

    it("and then triggers the failure action", result => {
      expect(result).toEqual(put(resendConfirmationCodeRoutine.failure("Error in the request.")));
    });

    finalizeSaga(it, resendConfirmationCodeRoutine);
  });
});

testSelector(authSelector, { auth: state }, state);