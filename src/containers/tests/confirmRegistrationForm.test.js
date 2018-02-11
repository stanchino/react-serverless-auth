import React from "react";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";
import { mount } from "enzyme";

import { flash } from "../../reducers/initialState";
import { ConfirmRegistrationForm } from "..";

const store = state => createStore()({ auth: state });
const noEmailComponent = <div className={'noEmail'}/>;
const subject = state => (
  mount(<Provider store={store(state)}><ConfirmRegistrationForm noEmail={noEmailComponent} /></Provider>)
);

describe("ConfirmRegistrationForm Component", () => {
  it("when the email is present", () => {
    expect(subject({ profile: { email: 'john@doe.com' }, ...flash })).not.toContainReact(noEmailComponent);
  });

  it("when the email is not present", () => {
    expect(subject({ profile: {}, ...flash })).toContainReact(noEmailComponent);
  });

  it("when the profile is not present", () => {
    expect(subject({ ...flash })).toContainReact(noEmailComponent);
  });
});