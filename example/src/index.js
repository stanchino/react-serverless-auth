import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";
import createStore from "./createStore";

import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import "./index.css";

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
