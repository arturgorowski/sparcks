import {combineReducers} from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import token from './TokenReducer';
import firestation from './FirestationReducer';

const combineReducer = combineReducers({
    error,
    user,
    status,
    token,
    firestation,
});

const rootReducer = (state, action) => {
    if (action.type === 'GLOBAL_RESET') {
        return {};
    }
    return combineReducer(state, action);
};

export default rootReducer;
