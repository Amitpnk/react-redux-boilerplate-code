import * as types from "./actionTypes";
import * as locationApi from "../../api/locationApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadLocationsSuccess(locations) {
    return { type: types.LOAD_AUTHORS_SUCCESS, locations }
}

export function loadLocations() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return locationApi
            .getLocations()
            .then(locations => {
                dispatch(loadLocationsSuccess(locations));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}