import store from '../store'

module.exports.changeName = (newName) => {
  store.dispatch({ type: 'CHANGE_NAME', payload: newName });
}
