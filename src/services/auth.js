import $http from "../services/index.js";
import {API_AUTH} from "../app/api_endpoint.js";

export function register(formData) {
    return $http.post(API_AUTH.authRegister, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

export function login(payload) {
    return $http.post(API_AUTH.authLogin, payload);
}

export function logout() {
    return $http.post(API_AUTH.authLogout);
}