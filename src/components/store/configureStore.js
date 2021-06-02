import { createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducers = combineReducers({
    entries: entriesReducer
})

const configureStore = () => {
    return createStore(combinedReducers, composeWithDevTools(
    ));
}

export default configureStore;
