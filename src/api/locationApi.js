import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/locations/";

export function getLocations() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
