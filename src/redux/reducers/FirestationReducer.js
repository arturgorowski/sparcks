import {actionTypes} from '../actions/firestation';

const initialState = {firestation: null};

const firestationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FIRESTATION_SUCCESS:
            return {
                ...action.firestation,
            };
        default:
            return state;
    }
};

export default firestationReducer;
