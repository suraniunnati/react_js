import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./loginReducer/reducer";
import { ProductReducer } from "./productReducer/productReducer";

const alldata=combineReducers({
    reducer,
    ProductReducer
})
export const Store= legacy_createStore(alldata)