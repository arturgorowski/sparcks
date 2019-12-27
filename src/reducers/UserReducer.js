import {actionTypes} from '../actions/UserActions';

const initialState = {
    user: null,
    userLogged: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.USER_REQUEST:
            return {
                ...state,
            };
        case actionTypes.USER_SUCCESS:
            return {
                ...state,
                userLogged: action.user,
            };
        case actionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
