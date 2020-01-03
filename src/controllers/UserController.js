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

            console.log('UserController - login() - token.data: ', token.data);
            return token.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            throw error.response.data;
        }
    };

    loggedInUser = async (access_token, userId) => {
        try {
            let user = await httpClient.get(
                `firefighters/${userId}`,
                {
                    params: {
                        access_token: access_token,
                    },
                },
            );
            console.log('UserController - loggedInUser() - result.data: ', user.data);
            return user.data;
        } catch (error) {
            throw error.response.data;
        }
    };

    logout = async () => {
        try {
            await httpClient.post(`${LOGOUT_BASE_PATH}`);

            return null;
        } catch (error) {
            throw error.response.data;
        }
    };
}

export default new UserController();
