import configureStore from 'redux-mock-store'; //ES6 modules
import * as userActions from '../../redux/actions/user/actions';
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

    it('should create an action for login request', () => {
        const expectedAction = {
            type: userActions.actionTypes.LOGIN_REQUEST,
        };

        // Dispatch the action
        store.dispatch(
            userActions.loginRequest(
                credentials.username,
                credentials.password,
            ),
        );

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for login success', () => {
        const expectedAction = {
            type: userActions.actionTypes.LOGIN_SUCCESS,
        };

        // Dispatch the action
        store.dispatch(userActions.loginSuccess());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for login error', () => {
        const expectedAction = {
            type: userActions.actionTypes.LOGIN_ERROR,
        };

        // Dispatch the action
        store.dispatch(userActions.loginError());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for logout request', () => {
        const expectedAction = {
            type: userActions.actionTypes.LOGOUT_REQUEST,
        };

        // Dispatch the action
        store.dispatch(userActions.logoutRequest());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action for logout error', () => {
        const expectedAction = {
            type: userActions.actionTypes.LOGOUT_ERROR,
        };

        // Dispatch the action
        store.dispatch(userActions.logoutError());

        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });
});
