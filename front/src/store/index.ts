import { all } from "@redux-saga/core/effects";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";

// Reducers
import { usersReducer } from "./models/users";

// Saga
import usersSaga from "./models/users/saga";

const sagaMiddleWare = createSagaMiddleWare();

const rootReducer = combineReducers({ users: usersReducer });

function* rootSaga() {
  yield all([usersSaga()]);
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
