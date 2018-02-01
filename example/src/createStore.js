import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import { authReducer, authSagas, authMiddleware } from "react-serverless-auth";

export default history => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(authReducer, applyMiddleware(sagaMiddleware, authMiddleware(history)));

    authSagas.forEach(sagaMiddleware.run);

    return store;
}