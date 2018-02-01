import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import createStore from "redux-mock-store";
import { routerMiddleware, ConnectedRouter } from "react-router-redux";
import createHistory from "history/createHashHistory";
import { Switch, Route } from "react-router";
import { mount } from "enzyme";

import { initialState } from "../../reducers/initialState";

import { UnauthenticatedLink } from "..";

const history = createHistory();
const store = state => createStore([routerMiddleware(history)])({ auth: state });
const app = state => (
    <Provider store={store(state)}>
        <ConnectedRouter history={history}>
            <div>
                <nav>
                    <UnauthenticatedLink to={"/auth"}>Link</UnauthenticatedLink>
                </nav>
                <Switch>
                    <Route path={"/"} exact><div>Home</div></Route>
                    <Route path={"/auth"}><div>Auth</div></Route>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
);

describe("UnauthenticatedLink Component", () => {
    it("matches the snapshot", () => {
        expect(renderer.create(app(initialState)).toJSON()).toMatchSnapshot();
    });

    it("while page is loading", () => {
        expect(mount(app({ loading: true })).find('NavLink')).toHaveLength(0);
    });

    describe("when the state is loaded", () => {
        const state = isLoggedIn => ({ loading: false, isLoggedIn: isLoggedIn });
        const expectedLink = isLoggedIn => (expect(mount(app(state(isLoggedIn))).find('NavLink').length));

        it("when user is signed in is loaded", () => expectedLink(true).toEqual(0));
        it("when user is not signed in is loaded", () => expectedLink(false).toEqual(1));
    });
});