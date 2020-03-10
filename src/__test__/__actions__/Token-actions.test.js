import configureStore from 'redux-mock-store'; //ES6 modules
import * as tokenActions from '../../redux/actions/token/actions';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const token = {name: 'hdjhdgbhsga'};

describe('TokenActions', () => {
    afterEach(function() {
        store.clearActions();
    });

    const store = mockStore(token);

    it('should create an action for token save', () => {
        const expectedAction = {
            type: tokenActions.actionTypes.SAVE_TOKEN,
        };

        // Dispatch the action
        store.dispatch(tokenActions.saveToken());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });
});
