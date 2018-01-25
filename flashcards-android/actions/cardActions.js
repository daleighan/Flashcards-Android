import store from '../store';
import axios from 'axios';

module.exports = {
  initialFetch: (username) => {
    axios.get(`http://ec2-52-15-41-183.us-east-2.compute.amazonaws.com/api/all_by_user/?username=${username}`)
    .then((response) => {
      let categories = new Set();
      response.data.Items.forEach(card => categories.add(card.category));
      categories = Array.from(categories);
      let payload = {
        cards: response.data.Items,
        categories, 
      }
      store.dispatch({ type: 'INITIAL_FETCH', payload, });
    });
  },
  updateCategory: (newCategory) => {
    store.dispatch({ type: 'UPDATE_CATEGORY', payload: newCategory });
  },
  updateNewCategory: (text) => {
    store.dispatch({ type: 'UPDATE_NEW', payload: text });
  },
  updateNewInput: (text, type) => {
    console.log(text);
    switch(type) {
      case 'front': {
        store.dispatch({ type: 'UPDATE_NEW_FRONT', payload: text });
        break;
      }
      case 'back': {
        store.dispatch({ type: 'UPDATE_NEW_BACK', payload: text });
        break;
      }
    }
  },
}
