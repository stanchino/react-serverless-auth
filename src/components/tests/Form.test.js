import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { Form } from "..";

const mockStore = configureStore();

describe("Form", () => {
    it("matches the snapshot", () => {
        const store = mockStore({ auth: { flash: { error: null, notice: null } } });
        expect(renderer.create(<Provider store={store}><Form form={{ handleSubmit: jest.fn() }}/></Provider>).toJSON()).toMatchSnapshot();
    });

    it("while loading", () => {
        const store = mockStore({ auth: { flash: { error: null, notice: null } }});
        const subject = mount(<Provider store={store}><Form form={{ handleSubmit: jest.fn() }} loading={true} /></Provider>);
        expect(subject.text()).toMatch("Loading...");
    });
});