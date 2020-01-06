import {actionTypes} from '../actions/user';

const initialState = {user: null};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...action.user,
            };
        default:
            return state;
    }
};

export default userReducer;
