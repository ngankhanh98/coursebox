const toast = {
    status: 0,
    message: ''
}

function toastReducer(state = toast, action) {
    switch (action.type) {
        case 'toast/add': {
            return { ...toast, status: action.payload.status, message: action.payload.message }
        }
        default:
            return state
    }
}

export default toastReducer