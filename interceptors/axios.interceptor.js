const axios = require('axios');
import store from '../store'
const http = axios.create({
    baseURL: 'http://api.dev.letstudy.org',
    headers: {
        "content-type": "application/json"
    },
    responseType: "json"
});

http.interceptors.request.use(function (request) {
    const { token } = store.getState().userReducer
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    return request;
}, function (error) {
    return Promise.reject(error);
});

export default http