const course = {
    top_sell: [],
    top_new: [],
    top_rate: [],
    my_course: []
}

function courseReducer(state = course, action) {
    switch (action.type) {
        case 'course/load_top_sell': {
            return { ...state, top_sell: action.payload }
        }
        case 'course/load_top_new': {
            return { ...state, top_new: action.payload }
        }
        case 'course/load_top_rate': {
            return { ...state, top_rate: action.payload }
        }
        case 'course/load_my_course': {
            return { ...state, my_course: action.payload }
        }
        case 'course/add_my_course': {
            const { my_course } = state
            return { ...state, my_course: [...my_course, ...action.payload] }
        }
        default:
            return state
    }
}

export default courseReducer