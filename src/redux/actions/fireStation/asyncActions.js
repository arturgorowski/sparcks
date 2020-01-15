import FireStationController from '../../../controllers/FireStationController';
import {fireStationError, fireStationRequest, fireStationSuccess} from './actions';

export const getUserFireStation = (id) => async (dispatch) => {
    dispatch(fireStationRequest());
    try {
        const fireStation = await FireStationController.getUserFireStation(id);
        // console.log(fireStation);
        dispatch(fireStationSuccess(fireStation));

    } catch (error) {
        dispatch(fireStationError(error.message));
    }
};
