import {FIRESTATIONS} from 'react-native-dotenv';
import httpClient from './HttpClient';

class InterventionController {
    getIntervention = async (id) => {
        console.log(id);
        try {
            let intervention = await httpClient.get(
                `${FIRESTATIONS}/${id}/interventions`,
            );
            console.log('-------------------------------------------------------InterventionController.js---------------');
            console.log('getInterventions() - intervention.data: ', intervention.data);
            return intervention.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            throw error.response.data.error;
        }
    };
}

export default new InterventionController();
