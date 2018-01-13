import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { Messages } from "..";

const mockStore = configureStore();

const subject = store => (mount(<Provider store={store}><Messages /></Provider>));

const matchFlash = (state, text) => {
    describe("when the flash is set", () => {
        const store = mockStore(state);
        it("shows the message", () => {
            expect(subject(store).text()).toMatch(text);
        })
    });
};

describe("Flash Component", () => {
    it("matches the snapshot", () => {
        const store = mockStore({ auth: { flash: { error: null, notice: null } } });
        expect(renderer.create(<Provider store={store}><Messages /></Provider>).toJSON()).toMatchSnapshot();
    });
    matchFlash({ auth: { flash: { error: 'error' } } }, "error");
    matchFlash({ auth: { flash: { notice: 'notice' } } }, "notice");
});