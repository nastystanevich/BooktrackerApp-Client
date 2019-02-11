import { getUser, getBooks } from '../helpers/api';

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

function recieveBooks(books) {
    return {
        type: 'RECEIVED_BOOKS',
        books: books,
    };
}

function fetchBooks() {
    return function (dispatch) {
        return getBooks()
            .then(res => {
                dispatch(recieveBooks(res));
            });
    };
}

export { setUserIsLoggedIn, fetchUser, fetchBooks };