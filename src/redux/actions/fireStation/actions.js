export const actionTypes = {
    FIRESTATION: 'FIRESTATION',
    GET_FIRESTATION_REQUEST: 'FIRESTATION_REQUEST',
    GET_FIRESTATION_ERROR: 'FIRESTATION_ERROR',
    GET_FIRESTATION_SUCCESS: 'FIRESTATION_SUCCESS',
};

export const fireStationRequest = () => ({
    type: actionTypes.GET_FIRESTATION_REQUEST,
});

export const fireStationError = error => ({
    type: actionTypes.GET_FIRESTATION_ERROR,
    error,
});

export const fireStationSuccess = fireStation => ({
    type: actionTypes.GET_FIRESTATION_SUCCESS,
    fireStation,
});