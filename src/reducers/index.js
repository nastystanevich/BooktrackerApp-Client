//принимает 
//  текущее состояние
//  action
//возвращает
//  новое состояние

//import { logIn } from './action';
import { getUser } from '../api';

const intialSatate = {
    user: null,
}

function logInReducer(state, action) {
    if (state === 'underfined') {
        return intialSatate;
    }
    switch (action.type) {
    case 'LOGED_IN':
        return Object.assign({}, state, {user: getUser()});
    default:
        return state;
    }
}

export {logInReducer};