import client from '../../controllers/HttpClient';
import {globalReset} from '../actions/global';

export default ({dispatch}) => next => async action => {
    client.interceptors.response.use(null, error => {
        // console.log('AxiosMiddleware >>> ', error.response);
        // console.log('AxiosMiddleware >>> ', error.response.data.error.code);
        // console.log('AxiosMiddleware >>> ', error.response.status);
        if (error.response.status === 401) {
            if (error.response.data.error.code !== 'LOGIN_FAILED') {
                dispatch(globalReset());
            } else {
                throw new Error('Unauthorized');
            }
        }
        return Promise.reject(error);
    });

    return next(action);
};
