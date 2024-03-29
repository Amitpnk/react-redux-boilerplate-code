import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function locationReducer(state = initialState.locations, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.locations;
        default:
            return state;
    }
}