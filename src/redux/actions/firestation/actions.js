export const actionTypes = {
    FIRESTATION: 'FIRESTATION',
    GET_FIRESTATION_REQUEST: 'FIRESTATION_REQUEST',
    GET_FIRESTATION_ERROR: 'FIRESTATION_ERROR',
    GET_FIRESTATION_SUCCESS: 'FIRESTATION_SUCCESS',
};

export const firestationRequest = () => ({
    type: actionTypes.GET_FIRESTATION_REQUEST,
});

export const firestationError = error => ({
    type: actionTypes.GET_FIRESTATION_ERROR,
    error,
});

export const firestationSuccess = firestation => ({
    type: actionTypes.GET_FIRESTATION_SUCCESS,
    firestation,
});