import { combineReducers } from "redux";
import { CustomersReducer } from "./Slices/customers";
const rootReducer = combineReducers({ CustomersReducer });

export default rootReducer;
