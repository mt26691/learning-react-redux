import { createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries.reducers';

const combinedReducers = combineReducers({
    entries: entriesReducer
})

const configureStore = () => {
    return createStore(combinedReducers);
}
const store = createStore(combinedReducers);

export default configureStore;
