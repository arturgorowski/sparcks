import {combineReducers} from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import token from './TokenReducer';

const combineReducer = combineReducers({
    error,
    user,
    status,
    token,
});

const rootReducer = (state, action) => {
    // if (action.type === 'GLOBAL_RESET') {
    //     const {settings} = state;
    //     state = {settings: {...settings}};
    // }
    return combineReducer(state, action);
};

export default rootReducer;
