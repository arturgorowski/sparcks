import {FIRESTATIONS} from 'react-native-dotenv';
import httpClient from './HttpClient';

class FirestationController {
    getUserFirestation = async (id) => {
        console.log(id);
        try {
            let firestation = await httpClient.get(
                `${FIRESTATIONS}/${id}`,
            );
            console.log('-------------------------------------------------------FirestationController.js---------------');
            console.log('getUserFirestation() - firestation.data: ', firestation.data);
            return firestation.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            throw error.response.data.error;
        }
    };
}

export default new FirestationController();
