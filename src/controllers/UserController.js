import httpClient from './HttpClient';

class UserController {
    constructor() {
        this.loginPath = 'firefighters/login';
        this.loggedInUserPath = 'firefighters';
    }

    login = async (username, password) => {
        // Real implementation of a login request using the HttpClient
        try {
            let result = await httpClient({
                url: this.loginPath,
                method: 'POST',
                data: {
                    username: username,
                    password: password,
                },
            });
            //return console.log('UserController: ', result.data);
            // if (result.data !== undefined) {
            //     this.loggedInUser(result.data.id, result.data.userId)
            //         .then((response) => {
            //             console.log('logged user response: ', response);
            //             return response;
            //         })
            //         .catch((error) => {
            //             console.log(error);
            //             return Promise.reject(error);
            //         });
            // } else {
            //     return result.data;
            // }
            console.log('UserController - login() - result.data: ', result.data);
            return result.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            return error;
        }
    };

    loggedInUser = async (access_token, userId) => {
        try {
            let result = await httpClient({
                url: `${this.loggedInUserPath}/${userId}`,
                method: 'GET',
                params: {
                    access_token: access_token,
                },
            });
            console.log('UserController - loggedInUser() - result.data: ', result.data);
            return result.data;
        } catch (error) {
            return error;
        }
    };

    logout = () => null;
}

export default new UserController();
