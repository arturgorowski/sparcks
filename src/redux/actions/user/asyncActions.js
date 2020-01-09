import UserController from '../../../controllers/UserController';
import {globalReset} from '../global';
import {loginError, loginRequest, loginSuccess, logoutError, logoutRequest} from './actions';
import {saveToken} from '../token';

export const login = (username, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const token = await UserController.login(username, password);
        dispatch(saveToken(token));
        console.log('-------------------------------------------------------asyncActions.js----------------');
        console.log('token: ', token);

        if (token !== null) {
            const user = await UserController.getUser(token.userId);
            console.log('-------------------------------------------------------asyncActions.js----------------');
            console.log('loggedUser(): ', user);
            dispatch(loginSuccess(user));
        }

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