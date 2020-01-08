import FirestationController from '../../../controllers/FirestationController';
import {firestationError, firestationRequest, firestationSuccess} from './actions';

export const getUserFirestation = (id) => async (dispatch) => {
    dispatch(firestationRequest());
    console.log('geUserFirestation()');
    try {
        const data = await FirestationController.getUserFirestation(id);
        console.log(data);
        dispatch(firestationSuccess(data));

    } catch (error) {
        dispatch(firestationError(error.message));
    }
};