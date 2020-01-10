import {actionTypes} from '../actions/fireStation';

const initialState = {fireStation: null};

const fireStationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FIRESTATION_SUCCESS:
            return {
                ...state,
                fireStation: action.fireStation,
            };
        default:
            return state;
    }
};

export default fireStationReducer;
