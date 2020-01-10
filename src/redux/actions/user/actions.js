export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',

    LOGOUT: 'LOGOUT',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_ERROR: 'LOGOUT_ERROR',
};

export const loginRequest = () => ({
    type: actionTypes.LOGIN_REQUEST,
});

export const loginError = error => ({
    type: actionTypes.LOGIN_ERROR,
    error,
});

export const loginSuccess = user => ({
    type: actionTypes.LOGIN_SUCCESS,
    user,
});

export const logoutRequest = () => ({
    type: actionTypes.LOGOUT_REQUEST,
});

export const logoutError = error => ({
    type: actionTypes.LOGOUT_ERROR,
    error,
});
