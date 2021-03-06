import { combineReducers, createStore } from "redux";

// Reducers
import { usersReducer } from "./models/users";

const rootReducer = combineReducers({ users: usersReducer });

export const store = createStore(rootReducer);
