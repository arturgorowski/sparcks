import FireStationController from '../../../controllers/FireStationController';
import {fireStationError, fireStationRequest, fireStationSuccess} from './actions';

export const getUserFirestation = (id) => async (dispatch) => {
    dispatch(fireStationRequest());
    console.log('geUserFireStation()');
    try {
        const fireStation = await FireStationController.getUserFireStation(id);
        console.log(fireStation);
        dispatch(fireStationSuccess(fireStation));

    } catch (error) {
        dispatch(fireStationError(error.message));
    }
};