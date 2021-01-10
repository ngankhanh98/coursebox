import { combineReducers } from "redux";
import userReducer from './user.reducer'
import toastReducer from './toast.reducer'
import courseReducer from './course.reducer'

export default combineReducers({
    userReducer,
    toastReducer,
    courseReducer
});
