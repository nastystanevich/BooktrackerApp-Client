import {API_PORT, JWT_TOKEN} from './config';

const backendUrl = `http://localhost:${API_PORT}/api`;

function postBook(book) {
    const booksUrl = `${backendUrl}/books`;
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    fetch(booksUrl, {
        method: 'POST',
        config,
        body: book,
    }).then(response => {
        response.json();
    });
}

function getBooks() {
    const booksUrl = `${backendUrl}/books`;
    return fetch(booksUrl)
        .then((response) => response.json());
}

function getBook(id) {
    const bookUrl = `${backendUrl}/books/${id}`;
    return fetch(bookUrl)
        .then((response) => response.json());
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
        .then(res => {
            // if (res.status === 400) {
            //     res.json()
            //         .then(res => {
            //             //console.log(res.message);
            //             throw res.message;
            //             //er = throw(res);
            //         });
            // }
            // else {
            //     res.json()
            //         .then(res => {
            //             localStorage.setItem(JWT_TOKEN, res.token);
            //         });
            // }
            
            return res.json();
        });
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
    }).then(res => res.json())
        .then(res => {
            localStorage.setItem(JWT_TOKEN, res.token);
        });
}
export {postBook, getBooks, getBook, logIn, signUp};