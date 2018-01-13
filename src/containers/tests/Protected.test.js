import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { Protected }  from "..";

const mockStore = configureStore();

const childComponent = (<div/>);
const signInForm = (<form/>);

const subject = (store, component = signInForm) => (
    mount(<Provider store={store}><Protected component={component}>{childComponent}</Protected></Provider>)
);

describe("Protected Component", () => {
    describe("when the user is not logged in", () => {
        const store = mockStore({ auth: { isLoggedIn: false } });

        it('and the component is not null', () => {
            expect(subject(store)).toContainReact(signInForm);
        });

        it('and the component is null', () => {
            expect(subject(store, null)).not.toContainReact(signInForm);
        })
    });

    it("when the user is logged in", () => {
        const store = mockStore({ auth: { isLoggedIn: true } });
        expect(subject(store)).toContainReact(childComponent);
    });
});