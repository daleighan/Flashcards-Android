import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
// below is an example of how to make redux middleware;
const logger1 = (store) => (next) => (action) => {
  console.log('action fired', action);
  // middleware could also be used to modify the action type
  next(action);
}

const middleware = applyMiddleware(logger, thunk);// put in middleware as args

const store = createStore(reducers, {}, middleware);//middleware can be provided as the third argument to this

//anything put in a store.subscribe is called any time an action is dispatched
store.subscribe(() => {
});

export default store;

