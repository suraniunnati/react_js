import { legacy_createStore } from "redux";
import { ReservReducer } from "./ReservReducer";


export const Store= legacy_createStore(ReservReducer)