import {LOGIN_BASE_PATH, LOGOUT_BASE_PATH} from 'react-native-dotenv';
import httpClient from './HttpClient';

class UserController {
    login = async (username, password) => {
        console.log(username, password);
        try {
            let token = await httpClient.post(
                `${LOGIN_BASE_PATH}`,
                {
                    username: username,
                    password: password,
                },
            );
            console.log('-------------------------------------------------------UserController.js---------------');
            console.log('login() - token.data: ', token.data);
            return token.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            // console.log('error UserController login: ', error);
            throw error.response.data.error.code;
        }
    };

    getUser = async (userId) => {
        try {
            let user = await httpClient.get(`firefighters/${userId}`);
            console.log('-------------------------------------------------------UserController.js---------------');
            console.log('getUser() - user.data: ', user.data);
            return user.data;
        } catch (error) {
            // console.log('error UserController getUser: ', error);
            throw error;
        }
    };

    logout = async () => {
        try {
            await httpClient({
                method: 'post',
                url: `${LOGOUT_BASE_PATH}`,
            });

            return null;
        } catch (error) {
            throw error;
        }
    };
}

export default new UserController();
