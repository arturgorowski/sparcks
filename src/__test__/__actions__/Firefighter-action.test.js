import configureStore from 'redux-mock-store'; //ES6 modules
import * as firefighterActions from '../../redux/actions/firefighter/actions';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const firefighter = {name: 'hdjhdgbhsga'};

describe('FirefighterActions', () => {
    afterEach(function() {
        store.clearActions();
    });

    const store = mockStore(firefighter);

    it('should create an action for firefighter Request', () => {
        const expectedAction = {
            type: firefighterActions.actionTypes.GET_FIREFIGHTER_REQUEST,
        };

        // Dispatch the action
        store.dispatch(firefighterActions.firefightersRequest());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for firefighter error', () => {
        const expectedAction = {
            type: firefighterActions.actionTypes.GET_FIREFIGHTER_ERROR,
        };

        // Dispatch the action
        store.dispatch(firefighterActions.firefightersError());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for firefighter success', () => {
        const expectedAction = {
            type: firefighterActions.actionTypes.GET_FIREFIGHTER_SUCCESS,
        };

        // Dispatch the action
        store.dispatch(firefighterActions.firefightersSuccess());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });
});
