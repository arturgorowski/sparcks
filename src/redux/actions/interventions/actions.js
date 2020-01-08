export const actionTypes = {
    INTERVENTION: 'INTERVENTION',
    GET_INTERVENTION_REQUEST: 'GET_INTERVENTION_REQUEST',
    GET_INTERVENTION_ERROR: 'GET_INTERVENTION_ERROR',
    GET_INTERVENTION_SUCCESS: 'GET_INTERVENTION_SUCCESS',
};

export const interventionsRequest = () => ({
    type: actionTypes.GET_INTERVENTION_REQUEST,
});

export const interventionsError = error => ({
    type: actionTypes.GET_INTERVENTION_ERROR,
    error,
});

export const interventionsSuccess = intervention => ({
    type: actionTypes.GET_INTERVENTION_SUCCESS,
    intervention,
});