import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import counter from './state/counter'
import todo,{initTodoSync} from './state/todo'
import customers,{fetchCustomers} from './state/customers'
import thunk from 'redux-thunk'


const reducer=combineReducers({
    counter,
    todo,
    customers
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk))
);

store.dispatch(fetchCustomers());
store.dispatch(initTodoSync());

