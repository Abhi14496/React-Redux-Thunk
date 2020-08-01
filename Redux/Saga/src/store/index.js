import reducer from '../reducers/index';
import index from '../action';
import { createStore,applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,storeEnhancer(applyMiddleware(initialiseSagaMiddleware)));
initialiseSagaMiddleware.run( index);
export default store;