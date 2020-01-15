import httpClient from './HttpClient';

class FirefighterController {
    getFirefighter = async id => {
        // console.log(id);
        try {
            let firefighter = await httpClient.get(
                `firefighters/fireStation/${id}`,
            );
            // console.log('-------------------------------------------------------FirefighterController.js---------------');
            // console.log('getFirefighter() - firefighter.data: ', firefighter.data);
            return firefighter.data;
            // Data is the object exposes by axios for the response json
        } catch (error) {
            throw error.response.data.error;
        }
    };
}

export default new FirefighterController();
