import { combineReducers } from "redux";
import customers from "./customerReducer";
import locations from "./locationReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    customers,
    locations,
    apiCallsInProgress
});

export default rootReducer;