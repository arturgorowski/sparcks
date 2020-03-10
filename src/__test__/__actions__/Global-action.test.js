import configureStore from 'redux-mock-store'; //ES6 modules
import * as globalActions from '../../redux/actions/global/actions';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const data = {name: 'hdjhdgbhsga'};

describe('GlobalActions', () => {
    afterEach(function() {
        store.clearActions();
    });

    const store = mockStore(data);

    it('should create an action for global reset', () => {
        const expectedAction = {
            type: globalActions.actionTypes.GLOBAL_RESET,
        };

        // Dispatch the action
        store.dispatch(globalActions.globalReset());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });
});
