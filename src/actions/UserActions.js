import UserController from '../controllers/UserController';

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    USER_REQUEST: 'USER_REQUEST',
    USER_ERROR: 'USER_ERROR',
    USER_SUCCESS: 'USER_SUCCESS',
};

const loginRequest = () => ({
    type: actionTypes.LOGIN_REQUEST,
});

const loginError = error => ({
    type: actionTypes.LOGIN_ERROR,
    error,
});

const loginSuccess = user => ({
    type: actionTypes.LOGIN_SUCCESS,
    user,
});

const logoutRequest = () => ({
    type: actionTypes.LOGOUT,
});

const userRequest = () => ({
    type: actionTypes.USER_REQUEST,
});

const userSuccess = user => ({
    type: actionTypes.USER_SUCCESS,
    user,
});

const userError = error => ({
    type: actionTypes.USER_ERROR,
    error,
});

export const login = (username, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const user = await UserController.login(username, password);
        console.log('UserAction login(): ', user);
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginError(error.message));
    }
};

export const loggedInUser = (access_token, userId) => async (dispatch) => {
    dispatch(userRequest());
    try {
        const userLogged = await UserController.loggedInUser(access_token, userId);
        console.log('UserAction userLogged(): ', userLogged);
        dispatch(userSuccess(userLogged));
    } catch (error) {
        dispatch(userError(error.message));
    }
};

export const logout = () => (dispatch) => {
    UserController.logout();
    dispatch(logoutRequest());
};
