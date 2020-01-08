export const actionTypes = {
    FIREFIGHTER: 'FIREFIGHTER',
    GET_FIREFIGHTER_REQUEST: 'GET_FIREFIGHTER_REQUEST',
    GET_FIREFIGHTER_ERROR: 'GET_FIREFIGHTER_ERROR',
    GET_FIREFIGHTER_SUCCESS: 'GET_FIREFIGHTER_SUCCESS',
};

export const firefightersRequest = () => ({
    type: actionTypes.GET_FIREFIGHTER_REQUEST,
});

export const firefightersError = error => ({
    type: actionTypes.GET_FIREFIGHTER_ERROR,
    error,
});

export const firefightersSuccess = firefighter => ({
    type: actionTypes.GET_FIREFIGHTER_SUCCESS,
    firefighter,
});