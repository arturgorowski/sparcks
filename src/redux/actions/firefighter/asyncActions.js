import FirefighterController from '../../../controllers/FirefighterController';
import {firefightersError, firefightersRequest, firefightersSuccess} from './actions';

export const getFirefighter = (id) => async (dispatch) => {
    dispatch(firefightersRequest());
    try {
        const firefighter = await FirefighterController.getFirefighter(id);
        // console.log(firefighter);
        dispatch(firefightersSuccess(firefighter));

    } catch (error) {
        dispatch(firefightersError(error.message));
    }
};
