import {createStore,combineReducers} from 'redux'
import counter from './state/counter'


const reducer=combineReducers({
    counter
});

export const store = createStore(
    reducer,
);