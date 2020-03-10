import configureStore from 'redux-mock-store'; //ES6 modules
import * as interventionsActions from '../../redux/actions/interventions/actions';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const intervention = {name: 'hdjhdgbhsga'};

describe('InterventionsActions', () => {
    afterEach(function() {
        store.clearActions();
    });

    const store = mockStore(intervention);

    it('should create an action for intervention request', () => {
        const expectedAction = {
            type: interventionsActions.actionTypes.GET_INTERVENTION_REQUEST,
        };

        // Dispatch the action
        store.dispatch(interventionsActions.interventionsRequest());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for intervention error', () => {
        const expectedAction = {
            type: interventionsActions.actionTypes.GET_INTERVENTION_ERROR,
        };

        // Dispatch the action
        store.dispatch(interventionsActions.interventionsError());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for intervention success', () => {
        const expectedAction = {
            type: interventionsActions.actionTypes.GET_INTERVENTION_SUCCESS,
        };

        // Dispatch the action
        store.dispatch(interventionsActions.interventionsSuccess());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });
});
