import { JWT_TOKEN } from '../config';

const getJwt = () => localStorage.getItem(JWT_TOKEN);
const removeJwt = () => localStorage.removeItem(JWT_TOKEN);

export {getJwt, removeJwt};