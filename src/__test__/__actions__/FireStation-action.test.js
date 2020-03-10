import configureStore from 'redux-mock-store'; //ES6 modules
import * as fireStationActions from '../../redux/actions/fireStation/actions';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const fireStation = {name: 'hdjhdgbhsga'};

describe('FireStationActions', () => {
    afterEach(function() {
        store.clearActions();
    });

    const store = mockStore(fireStation);

    it('should create an action for fireStation Request', () => {
        const expectedAction = {
            type: fireStationActions.actionTypes.GET_FIRESTATION_REQUEST,
        };

        // Dispatch the action
        store.dispatch(fireStationActions.fireStationRequest());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for fireStation error', () => {
        const expectedAction = {
            type: fireStationActions.actionTypes.GET_FIRESTATION_ERROR,
        };

        // Dispatch the action
        store.dispatch(fireStationActions.fireStationError());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for fireStation success', () => {
        const expectedAction = {
            type: fireStationActions.actionTypes.GET_FIRESTATION_SUCCESS,
        };

        // Dispatch the action
        store.dispatch(fireStationActions.fireStationSuccess());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });
});
