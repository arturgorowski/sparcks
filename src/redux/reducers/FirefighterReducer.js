import {actionTypes} from '../actions/firefighter';

const initialState = {firefighter: null};

const firefighterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FIRESTATION_SUCCESS:
            return {
                ...action.firefighter,
            };
        default:
            return state;
    }
};

export default firefighterReducer;
