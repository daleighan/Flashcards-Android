import store from '../store'

module.exports = {
  changeUsername: (newName) => {
     store.dispatch({ type: 'UPDATE_USERNAME', payload: newName });
  }
}

