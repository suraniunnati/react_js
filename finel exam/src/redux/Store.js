import { applyMiddleware, legacy_createStore } from "redux";
import { ReservReducer } from "./ReservReducer";
import { thunk } from "redux-thunk";




export const Store= legacy_createStore(ReservReducer,applyMiddleware(thunk))