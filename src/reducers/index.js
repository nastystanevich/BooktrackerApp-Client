import { combineReducers } from 'redux';
//import logInReducer from './logInReducer';
import userReducer from './userReducer';


export default combineReducers({
    user: userReducer,
});