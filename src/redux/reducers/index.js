import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import axiosMiddleware from '../middleware/AxiosMiddleware';
import tokenMiddleware from '../middleware/TokenMiddleware';
import rootReducer from './RootReducer';

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['loading', 'error'],
    whitelist: ['user', 'token'],

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootStore = createStore(
    persistedReducer,
    applyMiddleware(thunk, tokenMiddleware, axiosMiddleware),
);

export const store = rootStore;

export const persist = callback => persistStore(rootStore, null, callback);
