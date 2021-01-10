import { combineReducers } from "redux";
import userReducer from './user.reducer'
import toastReducer from './toast.reducer'

export default combineReducers({
    userReducer,
    toastReducer
});
