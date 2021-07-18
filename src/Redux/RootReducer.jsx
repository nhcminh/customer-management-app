import { combineReducers } from "redux";
import { CustomersReducer } from "./Slices/customers";
import { StatesReducer } from "./Slices/states";
const rootReducer = combineReducers({ CustomersReducer, StatesReducer });

export default rootReducer;
