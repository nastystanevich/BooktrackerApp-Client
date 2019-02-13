import { getUser } from '../helpers/api';

const setUserIsLoggedIn = (result) => ({
    type: 'LOGED_IN',
    isLogged: !!result,
});

const recieveUser = (user) => ({
    type: 'RECEIVED_USER',
    user: user,
});

const fetchUser = () => (dispatch) => (
    getUser()
        .then(res => dispatch(recieveUser(res)))
        .then(res => dispatch(setUserIsLoggedIn(res.user)))
);

// const recieveBooks = (books) => ({
//     type: 'RECEIVED_BOOKS',
//     books: books,
// });

// const fetchBooks = () => (dispatch) => (
//     getBooks()
//         .then(res => dispatch(recieveBooks(res)))
// );

export { setUserIsLoggedIn, fetchUser };