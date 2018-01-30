import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";
import configureStore from "./stores";

import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import "./index.css";

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
