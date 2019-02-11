import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookReducer from './bookReducer';

export default combineReducers({
    user: userReducer,
    books: bookReducer,
});