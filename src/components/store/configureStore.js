import { createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import modalReducer from '../reducers/modal.reducers';

const combinedReducers = combineReducers({
    entries: entriesReducer,
    modals: modalReducer
})

const configureStore = () => {
    return createStore(combinedReducers, composeWithDevTools(
    ));
}

export default configureStore;
