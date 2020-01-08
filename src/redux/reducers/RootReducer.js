import {combineReducers} from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import token from './TokenReducer';
import firestation from './FirestationReducer';
import intervention from './InterventionReducer';

const combineReducer = combineReducers({
    error,
    user,
    status,
    token,
    firestation,
    intervention,
});

const rootReducer = (state, action) => {
    if (action.type === 'GLOBAL_RESET') {
        return {};
    }
    return combineReducer(state, action);
};

export default rootReducer;
