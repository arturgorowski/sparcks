import configureStore from 'redux-mock-store'; //ES6 modules
import Login from '../../screens/Login';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const intervention = {name: 'hdjhdgbhsga'};

describe('LoginScreen', () => {
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
});
