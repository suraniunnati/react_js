import { applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./ProductReducer";
import { thunk } from "redux-thunk";

export const Store = legacy_createStore(Reducer,applyMiddleware(thunk))