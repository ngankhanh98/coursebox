const user = {
    "message": null,
    "userInfo": {
        "id": null,
        "email": null,
        "avatar": null,
        "name": null,
        "favoriteCategories": [],
        "point": 0,
        "phone": null,
        "type": null,
        "isDeleted": null,
        "isActivated": null,
        "createdAt": null,
        "updatedAt": null
    },
    "token": null
}

function userReducer(state = user, action) {
    switch (action.type) {
        case 'user/login': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export default userReducer