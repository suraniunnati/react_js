import { legacy_createStore } from "redux";
import { Reducer } from "./ProductReducer";

export const Store = legacy_createStore(Reducer)