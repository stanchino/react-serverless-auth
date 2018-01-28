import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { PasswordResetForm }  from "..";

const mockStore = configureStore();

const RequestForm = <div className={'requestForm'} />;
const ConfirmationForm = <div className={'confirmationForm'} />;

const subject = store => (
    mount(<Provider store={store}><PasswordResetForm requestForm={RequestForm} confirmationForm={ConfirmationForm} /></Provider>)
);

const verifyFormsPresence = (requestSent, presentForm, missingForm) => {
    const store = mockStore({ auth: { passwordResetRequested: requestSent } });
    expect(subject(store)).toContainReact(presentForm);
    expect(subject(store)).not.toContainReact(missingForm);
}

describe("PasswordResetForm Component", () => {
    it("when password reset is not requested", () => verifyFormsPresence(false, RequestForm, ConfirmationForm));
    it("when password reset is requested", () => verifyFormsPresence(true, ConfirmationForm, RequestForm));
});