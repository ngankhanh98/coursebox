import http from '../interceptors/axios.interceptor'
const { TOAST_MESSAGE } = require('../contants');

const TOAST_ADD = (response) => ({ type: 'toast/add', payload: response })

const LOAD_TOP_RATE_COURSE = (payload) => ({ type: 'course/load_top_rate', payload: payload })

const loadTopRateCourse = () => async (dispatch) => {
    try {
        const res = await http.post('/course/top-rate', { limit: 10, page: 1 });
        dispatch(LOAD_TOP_RATE_COURSE(res.data.payload))
        dispatch(TOAST_ADD({ status: res.status, message: TOAST_MESSAGE.LOAD_COURSE_SUCCESS }))
    } catch (error) {
        dispatch(TOAST_ADD({ status: error?.response.status ?? 500, message: error.response.data.message ?? "Internal error" }))
    }
}

const LOAD_TOP_NEW_COURSE = (payload) => ({ type: 'course/load_top_new', payload: payload })

const loadTopNewCourse = () => async (dispatch) => {
    try {
        const res = await http.post('/course/top-new', { limit: 10, page: 1 });
        dispatch(LOAD_TOP_NEW_COURSE(res.data.payload))
        dispatch(TOAST_ADD({ status: res.status, message: TOAST_MESSAGE.LOAD_COURSE_SUCCESS }))
    } catch (error) {
        dispatch(TOAST_ADD({ status: error?.response.status ?? 500, message: error.response.data.message ?? "Internal error" }))
    }
}

const LOAD_TOP_SELL_COURSE = (payload) => ({ type: 'course/load_top_sell', payload: payload })

const loadTopSellCourse = () => async (dispatch) => {
    try {
        const res = await http.post('/course/top-sell', { limit: 10, page: 1 });
        dispatch(LOAD_TOP_SELL_COURSE(res.data.payload))
        dispatch(TOAST_ADD({ status: res.status, message: TOAST_MESSAGE.LOAD_COURSE_SUCCESS }))
    } catch (error) {
        dispatch(TOAST_ADD({ status: error?.response.status ?? 500, message: error.response.data.message ?? "Internal error" }))
    }
}

export { loadTopRateCourse,loadTopNewCourse, loadTopSellCourse }

