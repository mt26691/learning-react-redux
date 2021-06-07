import { createStore, combineReducers, applyMiddleware } from 'redux';
import entriesReducer from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalReducer from '../reducers/modal.reducers';
import createSagaMiddleware from 'redux-saga';
import { testSaga } from '../saga/testSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const combinedReducers = combineReducers({
    entries: entriesReducer,
    modals: modalReducer
})

const configureStore = () => {
    const store = createStore(combinedReducers, composeWithDevTools(
        applyMiddleware(...middlewares)
    ));
    sagaMiddleware.run(testSaga);
    return store;
}

export default configureStore;
