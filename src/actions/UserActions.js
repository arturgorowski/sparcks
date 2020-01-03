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

export const logout = () => (dispatch) => {
    UserController.logout();
    dispatch(logoutRequest());
};
