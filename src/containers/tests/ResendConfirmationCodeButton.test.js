import React from "react";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";
import { mount } from "enzyme";

import { ResendConfirmationCodeButton } from "..";

const store = state => createStore()({ auth: state });
const child = <div className={'children'}/>;
const subject = state => (
  mount(<Provider store={store(state)}><ResendConfirmationCodeButton form={{ submitting: false }}>{child}</ResendConfirmationCodeButton></Provider>)
);

describe("ResendConfirmationCodeButton Component", () => {
  it("when user is logged in", () => {
    expect(subject({ isLoggedIn: true })).not.toContainReact(child);
  });

  it("when the state is loading", () => {
    expect(subject({ loading: true })).not.toContainReact(child);
  });

  it("when the profile is not present", () => {
    expect(subject({})).toContainReact(child);
  });
});