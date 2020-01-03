import UserController from '../controllers/UserController';
import {globalReset} from '../actions/GlobalActions';

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',

    LOGOUT: 'LOGOUT',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_ERROR: 'LOGOUT_ERROR',

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

export const logoutRequest = () => ({
    type: actionTypes.LOGOUT_REQUEST,
});

export const logoutError = error => ({
    type: actionTypes.LOGOUT_ERROR,
    error,
});

const userSuccess = user => ({
    type: actionTypes.USER_SUCCESS,
    user,
});

export const login = (username, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const token = await UserController.login(username, password);
        console.log('UserAction login(): ', token);
        dispatch(loginSuccess(token));

        const loggedUser = await UserController.loggedInUser(token.id, token.userId);
        const {user} = loggedUser;
        dispatch(userSuccess(user));
    } catch (error) {
        dispatch(loginError(error.message));
    }
};

export const logout = () => async (dispatch) => {
    dispatch(logoutRequest());
    try {
        await UserController.logout();
        dispatch(globalReset());
    } catch (error) {
        dispatch(logoutError(error.message));
    }
};
