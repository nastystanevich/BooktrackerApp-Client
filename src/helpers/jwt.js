const getJwt = () => {
    return localStorage.getItem('user-jwt');
}

export default getJwt;