import {combineReducers} from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import token from './TokenReducer';
import fireStation from './FireStationReducer';
import intervention from './InterventionReducer';
import firefighter from './FirefighterReducer';

const combineReducer = combineReducers({
    error,
    user,
    status,
    token,
    fireStation,
    intervention,
    firefighter,
});

const rootReducer = (state, action) => {
    if (action.type === 'GLOBAL_RESET') {
        return {};
    }
    return combineReducer(state, action);
};

export default rootReducer;
