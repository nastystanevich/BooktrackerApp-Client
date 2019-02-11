import { JWT_TOKEN } from '../config';

const intialState = {
    userLogged: false,
    userData: 'Anothorized User',
};

function userReducer(state = intialState, action) {
    switch(action.type) {
    case 'LOGED_IN':
        if (!action.isLogged) {
            localStorage.removeItem(JWT_TOKEN);
            return Object.assign({}, state, {
                userLogged: action.isLogged,
                userData: 'Anothorised User',
            });
        }
        return Object.assign({}, state, {userLogged: action.isLogged});
    case 'RECEIVED_USER':
        return Object.assign({}, state, {userData: action.user});
    default:
        return state;
    }
}

export default userReducer;