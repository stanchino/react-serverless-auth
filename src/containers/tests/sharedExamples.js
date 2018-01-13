import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import createStore from "redux-mock-store";

const store = state => createStore()({ auth: state });

const app = (component, authState) => (<Provider store={store(authState)}>{component}</Provider>);

export const matchSnapshot = (component, state) => expect(renderer.create(app(component, state)).toJSON()).toMatchSnapshot();