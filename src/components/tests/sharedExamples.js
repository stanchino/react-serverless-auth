import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import createStore from "redux-mock-store";

import { initialState } from "../../reducers/auth";
import { connectedForm } from "../../containers/AuthForm";

const mockStore = createStore();
const store = mockStore({ auth: initialState });
const Form = connectedForm({ form: "test", onSubmit: jest.fn() });

export const matchFormSnapshot = Component => expect(renderer.create(
    <Provider store={store}>
        <Form>
            <Component />
        </Form>
    </Provider>
).toJSON()).toMatchSnapshot();

export const matchSnapshot = (Component, props = {}) => expect(renderer.create(
    <Component {...props} />
).toJSON()).toMatchSnapshot();