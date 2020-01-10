import {actionTypes} from '../actions/firefighter';

const initialState = {firefighter: null};

const firefighterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FIREFIGHTER_SUCCESS:
            console.log(action.firefighter);
            return {
                ...state,
                firefighter: action.firefighter,
            };
        default:
            return state;
    }
};

export default firefighterReducer;
