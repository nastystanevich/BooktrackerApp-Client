import { removeJwt } from '../helpers/jwt';

const intialState = {
    userLogged: false,
    userData: 'Anothorized User',
};

function userReducer(state = intialState, action) {
    switch(action.type) {
    case 'LOGED_IN':
        if (!action.isLogged) {
            removeJwt();
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