//import { createStore } from 'redux';
const { createStore } = require('redux');

const reducer = function(state, action) {
  //This will return the new state of the store
  //It makes changes based on what the action says to do
  if (action.type === 'INC') {
    return state + action.payload;
  }
  if (action.type === 'DEC') {
    return state - action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({type: 'INC', payload: 12});
store.dispatch({type: 'INC', payload: 11});
store.dispatch({type: 'INC', payload: 2});
store.dispatch({type: 'INC', payload: 4});
store.dispatch({type: 'INC', payload: 464});
store.dispatch({type: 'DEC', payload: 2});
store.dispatch({type: 'DEC', payload: 50002});
store.dispatch({type: 'DEC', payload: 1434});
