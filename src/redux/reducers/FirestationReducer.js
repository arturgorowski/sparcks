import {actionTypes} from '../actions/firestation';

const initialState = null;

const firestationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FIRESTATION_SUCCESS:
            return {
                ...action.firestation,
            };
        default:
            return state;
    }
};

export default firestationReducer;
