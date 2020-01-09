import InterventionController from '../../../controllers/InterventionController';
import {interventionsError, interventionsRequest, interventionsSuccess} from './actions';

export const getIntervention = (id) => async (dispatch) => {
    dispatch(interventionsRequest());
    try {
        const data = await InterventionController.getIntervention(id);
        console.log('asyncActions interventions:', data);
        dispatch(interventionsSuccess(data));

    } catch (error) {
        dispatch(interventionsError(error.message));
    }
};