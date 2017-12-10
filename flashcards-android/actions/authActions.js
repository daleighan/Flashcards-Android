import store from '../store'

module.exports = {
  changeInput: (newName, type) => {
    //if (type === 'username') {
    //  store.dispatch({ type: 'UPDATE_USERNAME', payload: newName });
    //}
    switch(type) {
      case 'username': {
        store.dispatch({ type: 'UPDATE_USERNAME', payload: newName });
      }
    }
  }
}

