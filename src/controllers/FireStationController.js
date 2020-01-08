import httpClient from './HttpClient';

class FireStationController {
    getUserFireStation = async (id) => {
        console.log(id);
        try {
            let fireStation = await httpClient.get(
                `fireStations/${id}`,
            );
            console.log('-------------------------------------------------------FireStationController.js---------------');
            console.log('getUserFireStation() - fireStation.data: ', fireStation.data);
            return fireStation.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            throw error.response.data.error;
        }
    };
}

export default new FireStationController();
