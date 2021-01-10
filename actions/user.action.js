const axios = require('axios');
const { TOAST_MESSAGE } = require('../contants');

const BASE_URL = 'http://api.dev.letstudy.org'

const TOAST_ADD = (response) => ({ type: 'toast/add', payload: response })
const LOGIN = (response) => ({ type: 'user/login', payload: response })

const login = ({ email, password }) => async (dispatch) => {
    try {
        const res = await axios.post(BASE_URL + '/user/login', { email: email, password: password });
        dispatch(LOGIN(res.data))
        dispatch(TOAST_ADD({ status: res.status, message: TOAST_MESSAGE.LOGIN_SUCCESS }))

    } catch (error) {
        dispatch(TOAST_ADD({ status: error.response.status, message: error.response.data.message }))
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
        const res = await axios.post(BASE_URL + '/user/register', data)
        dispatch(TOAST_ADD({ status: res.response.status, message: TOAST_MESSAGE.REGISTER_SUCCESS }))
    } catch (error) {
        dispatch(TOAST_ADD({ status: error.response.status, message: error.response.data.message }))
    }
}

export { login, register }

