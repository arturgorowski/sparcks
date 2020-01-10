import {actionTypes} from '../actions/interventions';

const initialState = {intervention: null};

const interventionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INTERVENTION_SUCCESS:
            return {
                ...state,
                intervention: action.intervention,
            };
        default:
            return state;
    }
};

export default interventionReducer;
