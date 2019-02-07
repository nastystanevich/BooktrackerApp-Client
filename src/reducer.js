//принимает 
//  текущее состояние
//  action
//возвращает
//  новое состояние

import {logIn} from './action';

const intialSatate = {
    user: null,
    token: null,
}

function logInReducer(state, action) {
    if (state === 'underfined') {
        return intialSatate;
    }
    switch (action.type) {
    case 'LOGED_IN':
        return Object.assign({}, state, {});
    default:
        return state;
    }
}

export {logInReducer};