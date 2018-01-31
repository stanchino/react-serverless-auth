import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../reducers";
import rootSagas from "../sagas";

import { authRoutine } from "react-serverless-auth/dist/actions";

export default history => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, routerMiddleware(history)));

    rootSagas.forEach(sagaMiddleware.run);

    store.dispatch(authRoutine.trigger());

    return store;
}