import axios from 'axios';

const createAxiosInstance = () => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Thêm interceptor để tự động gắn token
    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('API Error:', error.response?.data || error.message);
            return Promise.reject(error);
        }
    );

    return instance;
};

const $http = createAxiosInstance();
export default $http;
