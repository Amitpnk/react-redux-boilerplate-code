import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function customerReducer(state = initialState.customers, action) {
    switch (action.type) {
        case types.CREATE_CUSTOMER_SUCCESS:
            return [...state, { ...action.customer }];
        case types.UPDATE_CUSTOMER_SUCCESS:
            return state.map(customer =>
                customer.id === action.customer.id ? action.customer : customer)
        case types.LOAD_CUSTOMERS_SUCCESS:
            return action.customers;
        case types.DELETE_CUSTOMER_OPTIMISTIC:
            return state.filter(customer => customer.id !== action.customer.id);
        default:
            return state;
    }
}