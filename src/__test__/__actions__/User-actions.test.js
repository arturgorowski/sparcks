import configureStore from 'redux-mock-store'; //ES6 modules
import * as userActions from 'redux/actions/user/actions';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const user = {name: 'Artur'};
const credentials = {
    username: 'lukas',
    password: 'lukas',
};

describe('UserActions', () => {

    afterEach(function () {
        store.clearActions();
    });

    const store = mockStore(user);

    it('should create an action for login', () => {
        const expectedAction = {type: userActions.actionTypes.LOGIN_REQUEST};

        // Dispatch the action
        store.dispatch(userActions.login(credentials.username, credentials.password));

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for logout', () => {
        const expectedAction = {
            type: userActions.actionTypes.LOGOUT,
        };

        // Dispatch the action
        store.dispatch(userActions.logout());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });
});
