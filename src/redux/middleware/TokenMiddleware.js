import {actionTypes} from '../actions/token';
import httpClient from '../../controllers/HttpClient';

const setParams = (token) => {
    httpClient.defaults.headers['Authorization'] = token;
};

export default ({getState}) => next => async (action) => {
    const {token} = getState();

    if (action.type === actionTypes.SAVE_TOKEN) {
        //console.log('token', action.token.id);
        setParams(action.token.id);
    } else if (token) {
        //console.log('token', token.id);
        setParams(token.id);
    }
    return next(action);
};
