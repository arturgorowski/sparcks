import UserController from '../../../controllers/UserController';
import {globalReset} from '../global';
import {loginError, loginRequest, loginSuccess, logoutError, logoutRequest} from './actions';
import {saveToken} from '../token';

export const login = (username, password) => async (dispatch) => {
    dispatch(loginRequest());
    console.log('Login()');
    try {
        const token = await UserController.login(username, password);
        dispatch(saveToken(token));
        console.log('UserAction token: ', token);
        console.log('----------------------------');


        const data = await UserController.getUser(token.id, token.userId);
        console.log('UserAction loggedUser(): ', data);
        console.log('----------------------------');

        const {user} = data;
        dispatch(loginSuccess(user));

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