import store from '../store'

module.exports = {
  changeInput: (newInput, type) => {
    switch(type) {
      case 'username': {
        store.dispatch({ type: 'UPDATE_USERNAME', payload: newInput });
        break;
      }
      case 'email': {
        store.dispatch({ type: 'UPDATE_EMAIL', payload: newInput });
        break;
      }
      case 'password': {
        store.dispatch({ type: 'UPDATE_PASSWORD', payload: newInput });
        break;
      }
      case 'confirmation': {
        store.dispatch({ type: 'UPDATE_CONFIRMATION', payload: newInput });
        break;
      }
      case 'all': {
        store.dispatch({ type: 'UPDATE_USERNAME', payload: newInput });
        store.dispatch({ type: 'UPDATE_EMAIL', payload: newInput });
        store.dispatch({ type: 'UPDATE_PASSWORD', payload: newInput });
        store.dispatch({ type: 'UPDATE_CONFIRMATION', payload: newInput });
        break;
      }
    }
  }
}

