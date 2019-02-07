import {JWT_TOKEN} from './config';

function logIn() {
    return {
        type: 'LOGED_IN',
        token: localStorage[JWT_TOKEN],
    };
}

export {logIn};

