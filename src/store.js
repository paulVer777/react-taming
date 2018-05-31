import {createStore,combineReducers} from 'redux'
import counter from './state/counter'
import todo from './state/todo'

const reducer=combineReducers({
    counter,
    todo
});

export const store = createStore(
    reducer,
);