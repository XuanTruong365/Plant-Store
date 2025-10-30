

export const API_AUTH = {
    authRegister: "api/auth/register",
    authLogin: "api/auth/login",
    authForgot_password: "api/auth/forgot-password",
    authReset_password: "api/auth/reset-password",
    authGoogle_login: "api/auth/google-login",
    authLogout: "api/auth/logout",
    authProfile: "/api/auth/profile",

    // user management
    users: "/api/auth/users",
    user: (id) => `/api/auth/users/${id}`,
    restoreUser: (id) => `/api/auth/users/${id}/restore`,
    forceDeleteUser: (id) => `/api/auth/users/${id}/force-delete`,

};