import http from '../interceptors/axios.interceptor'

const { TOAST_MESSAGE } = require('../contants');

const TOAST_ADD = (response) => ({ type: 'toast/add', payload: response })

const LOGIN = (response) => ({ type: 'user/login', payload: response })

const login = ({ email, password }) => async (dispatch) => {
    try {
        const res = await http.post('/user/login', { email: email, password: password });
        dispatch(LOGIN(res.data))
        dispatch(TOAST_ADD({ status: res.status, message: TOAST_MESSAGE.LOGIN_SUCCESS }))
    } catch (error) {
        dispatch(TOAST_ADD({ status: error?.response.status ?? 500, message: error.response.data.message ?? "Internal error"}))
    }
}


const register = ({ username, email, phone, password }) => async (dispatch) => {
    const data = {
        username: username,
        email: email,
        phone: phone,
        password: password
    }
    try {
        const res = await http.post('/user/register', data)
        dispatch(TOAST_ADD({ status: res.response.status, message: TOAST_MESSAGE.REGISTER_SUCCESS }))
    } catch (error) {
        dispatch(TOAST_ADD({ status: error.response.status, message: error.response.data.message }))
    }
}

export { login, register }

