import { getUser } from '../api';

function setUserIsLoggedIn(result) {
    return {
        type: 'LOGED_IN',
        isLogged: !!result,
    };
}

function recieveUser(user) {
    return {
        type: 'RECEIVED_USER',
        user: user,
    };
}

function fetchUser() {
    return function (dispatch) {
        return getUser()
            .then(res => dispatch(recieveUser(res)))
            .then(res => dispatch(setUserIsLoggedIn(res.user)));
    };
}

export { setUserIsLoggedIn, fetchUser};