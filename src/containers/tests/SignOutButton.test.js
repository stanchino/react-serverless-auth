import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";

import { SignOutButton } from "..";

const mockStore = configureStore();
const store = state => mockStore(state);

describe("SignOutButton Component", () => {
    const expectButton = store => (expect(mount(<Provider store={store}><SignOutButton /></Provider>).find("button")));
    it("while page is loading", () => {
        const state = { auth: { loading: true } };
        expectButton(store(state)).toBeEmpty();
    });

    describe("when the state is loaded", () => {
        const state = isLoggedIn => ({ auth: { loading: false, isLoggedIn: isLoggedIn } });

        it("when user is signed in is loaded", () => {
            expectButton(store(state(true))).toBePresent();
        });

        it("when user is not signed in is loaded", () => {
            expectButton(store(state(false))).toBeEmpty();
        });
    });
});