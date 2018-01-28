import React from "react";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";
import { mount } from "enzyme";

import { Unauthenticated } from "..";

const store = state => createStore()({ auth: state });
const div = (<div />);
const subject = state => (
    mount(<Provider store={store(state)}><Unauthenticated>{div}</Unauthenticated></Provider>)
);

describe("Unauthenticated Component", () => {
    it("while page is loading", () => {
        expect(subject({ loading: true })).not.toContainReact(div);
    });

    describe("when the state is loaded", () => {
        const state = isLoggedIn => ({ loading: false, isLoggedIn: isLoggedIn });

        it("when user is signed in is loaded", () => expect(subject(state(true))).not.toContainReact(div));
        it("when user is not signed in is loaded", () => expect(subject(state(false))).toContainReact(div));
    });
});