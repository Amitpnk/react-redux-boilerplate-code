import * as types from "./actionTypes";
import * as customerApi from "../../api/customerApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCustomerSuccess(customers) {
    return { type: types.LOAD_CUSTOMERS_SUCCESS, customers }
}

export function createCustomerSuccess(customer) {
    return { type: types.CREATE_CUSTOMER_SUCCESS, customer };
}

export function updateCustomerSuccess(customer) {
    return { type: types.UPDATE_CUSTOMER_SUCCESS, customer };
}

export function deleteCustomerOptimistic(customer) {
    return { type: types.DELETE_CUSTOMER_OPTIMISTIC, customer };
}

export function loadCustomers() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return customerApi
            .getCustomers()
            .then(customers => {
                dispatch(loadCustomerSuccess(customers));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function saveCustomer(customer) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch, getState) {
        dispatch(beginApiCall());
        return customerApi
            .saveCustomer(customer)
            .then(savedCustomer => {
                customer.id
                    ? dispatch(updateCustomerSuccess(savedCustomer))
                    : dispatch(createCustomerSuccess(savedCustomer));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}


export function deleteCustomer(customer) {
    return function (dispatch) {
        // Doing optimistic delete, so not dispatching begin/end api call
        // actions, or apiCallError action since we're not showing the loading status for this.
        dispatch(deleteCustomerOptimistic(customer));
        return customerApi.deleteCustomer(customer.id);
    };
}