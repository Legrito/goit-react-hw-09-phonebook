const getIsAuth = state => state.auth.isAthenticated;

const getUserName = state => state.auth.user.name;

const getErrorMessage = state => state.auth.error;

const selectors = {
    getIsAuth,
    getUserName,
    getErrorMessage,
}

export default selectors;