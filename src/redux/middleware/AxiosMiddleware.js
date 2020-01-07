import client from '../../controllers/HttpClient';
import {globalReset} from '../actions/global';

export default ({dispatch}) => next => async (action) => {
    client.interceptors.response.use(null, (error) => {
        console.log('---------------------------------------------------------');
        console.log('AxiosMiddleware >>> ', error.response.data.error.code);
        console.log('AxiosMiddleware >>> ', error.response.status);
        if (error.response.status === 401) {
            // Alert.alert(
            //     strings.alert_session_expired_title,
            //     strings.alert_session_expired_message,
            //     [
            //         {
            //             text: 'OK',
            //             onPress: () => {
            //                 dispatch(globalReset());
            //             },
            //         },
            //     ],
            //     {cancelable: false},
            // );
            if (error.response.data.error.code === 'LOGIN_FAILED') {
                dispatch(globalReset());
                // throw new Error('Username or password is incorrect');
            } else {
                dispatch(globalReset());
                throw new Error('Unauthorized');
            }
        }
        return Promise.reject(error);
    });

    return next(action);
};
