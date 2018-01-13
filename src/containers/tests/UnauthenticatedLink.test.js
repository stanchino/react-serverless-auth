import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import createStore from "redux-mock-store";
import { mount } from "enzyme";

import { initialState } from "../../reducers/auth";

import UnauthenticatedLink from "../UnauthenticatedLink";

const store = state => createStore()({ auth: state });
const Link = (<div/>);
const app = state => (<Provider store={store(state)}><UnauthenticatedLink>{Link}</UnauthenticatedLink></Provider>);

describe("UnauthenticatedLink Component", () => {
    it("matches the snapshot", () => {
        expect(renderer.create(app(initialState)).toJSON()).toMatchSnapshot();
    });

    it("while page is loading", () => {
        expect(mount(app({ loading: true }))).not.toContainReact(Link);
    });

    describe("when the state is loaded", () => {
        const state = isLoggedIn => ({ loading: false, isLoggedIn: isLoggedIn });

        it("when user is signed in is loaded", () => expect(mount(app(state(true)))).not.toContainReact(Link));
        it("when user is not signed in is loaded", () => expect(mount(app(state(false)))).toContainReact(Link));
    });
});