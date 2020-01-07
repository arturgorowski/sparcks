export const actionTypes = {
    FIRESTATION: 'FIRESTATION',
    FIRESTATION_REQUEST: 'FIRESTATION_REQUEST',
    FIRESTATION_ERROR: 'FIRESTATION_ERROR',
    FIRESTATION_SUCCESS: 'FIRESTATION_SUCCESS',
};

export const firestationRequest = () => ({
    type: actionTypes.FIRESTATION_REQUEST,
});

export const firestationError = error => ({
    type: actionTypes.FIRESTATION_ERROR,
    error,
});

export const firestationSuccess = user => ({
    type: actionTypes.FIRESTATION_SUCCESS,
    user,
});