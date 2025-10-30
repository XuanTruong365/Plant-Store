import $http from "../services/index.js";
import {API_AUTH} from "../app/api_endpoint.js";

export function fetchUserProfile() {
    return $http.get(API_AUTH.authProfile);
}