import {GET_FIRESTATION_BY_ID} from 'react-native-dotenv';
import httpClient from './HttpClient';

class FirestationController {
    getUserFirestation = async (id) => {
        console.log(id);
        try {
            let data = await httpClient.get(
                `${GET_FIRESTATION_BY_ID}/${id}`,
            );
            console.log('-------------------------------------------------------FirestationController.js---------------');
            console.log('getUserFirestation() - data.data: ', data.data);
            return data.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            throw error.response.data.error;
        }
    };
}

export default new FirestationController();
