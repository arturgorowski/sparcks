import {actionTypes} from '../actions/token';

const initialState = null;

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_TOKEN:
            return {
                ...action.token,
            };
        default:
            return state;
    }
};

export default tokenReducer;
