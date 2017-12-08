import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from './reducers/index';

const logger1 = (store) => (next) => (action) => {
  alert('action fired', action);
  // middleware could also be used to modify the action type
  next(action);
}

const middleware = applyMiddleware(logger);// put in middleware as args

const store = createStore(reducers, {}, middleware);//middleware can be provided as the third argument to this

//anything put in a store.subscribe is called any time an action is dispatched
store.subscribe(() => {
  console.log('store changed', store.getState());
});
//Every dispatch must have a type property. Anything else dispatched can be called anything 

//store.dispatch({type: 'CHANGE_NAME', payload: 'Alex'});

export default store;

