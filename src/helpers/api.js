import { getJwt } from './jwt';
import { API_PORT } from '../config';

const backendUrl = `http://localhost:${API_PORT}/api`;

function postBook(book) {
    const booksUrl = `${backendUrl}/books`;
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    return fetch(booksUrl, {
        method: 'POST',
        config,
        body: book,
    }).then(res => res.json())
        .then(res => res._id);
}

function postComment(bookId, commentText, userId) {
    const comment = JSON.stringify({comment: commentText});
    const token = getJwt();
    if (token) {
        const commentUrl = `${backendUrl}/comment/${userId}/${bookId}`;
        return fetch(commentUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: comment,
        }).then(res => res.json())
            .catch(err => err);
    }
}

function getBooks() {
    const booksUrl = `${backendUrl}/books`;
    return fetch(booksUrl)
        .then((res) => res.json());
}

function getBook(id) {
    const bookUrl = `${backendUrl}/books/${id}`;
    return fetch(bookUrl)
        .then(res => res.json());
}

function getComments(bookId) {
    const bookCommentsUrl = `${backendUrl}/books/${bookId}/comments`;
    return fetch(bookCommentsUrl)
        .then(res => res.json());
}

function logIn(username, password) {
    const loginUrl = `${backendUrl}/auth/login`;
    const user = JSON.stringify({
        username: username,
        password: password,
    });

    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: user})
        .then(res => res.json());
}

function signUp(username, password) {
    const loginUrl = `${backendUrl}/auth/signup`;
    const user = JSON.stringify({
        username: username,
        password: password,
    });

    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: user,
    }).then(res => res.json());
}


function getUser() {
    const token = getJwt();
    if (token) {
        const userUrl = `${backendUrl}/user`;
        return fetch(userUrl, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => res.json())
            .catch(err => err);
    }
    return new Promise(res => res(false));
}
export {postBook, postComment,
    getBooks, getComments,
    getBook, logIn, signUp, getUser};