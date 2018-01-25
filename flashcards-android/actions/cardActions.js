import store from '../store';
import axios from 'axios';

module.exports = {
  initialFetch: username => {
    axios
      .get(
        `http://ec2-52-15-41-183.us-east-2.compute.amazonaws.com/api/all_by_user/?username=${username}`,
      )
      .then(response => {
        let categories = new Set();
        response.data.Items.forEach(card => categories.add(card.category));
        categories = Array.from(categories);
        let payload = {
          cards: response.data.Items,
          categories,
        };
        store.dispatch({type: 'INITIAL_FETCH', payload});
      });
  },
  updateCategory: newCategory => {
    store.dispatch({type: 'UPDATE_CATEGORY', payload: null});
    setTimeout(() => {
      store.dispatch({type: 'UPDATE_CATEGORY', payload: newCategory});
    }, 200);
  },
  updateNewCategory: text => {
    store.dispatch({type: 'UPDATE_NEW', payload: text});
  },
  updateNewInput: (text, type) => {
    console.log(text);
    switch (type) {
      case 'front': {
        store.dispatch({type: 'UPDATE_NEW_FRONT', payload: text});
        break;
      }
      case 'back': {
        store.dispatch({type: 'UPDATE_NEW_BACK', payload: text});
        break;
      }
    }
  },
  addCard: (
    currentCategory,
    newCategory,
    categories,
    username,
    front,
    back,
  ) => {
    console.log('current cat', currentCategory);
    if (!categories.includes(newCategory) && newCategory.length > 0) {
      store.dispatch({type: 'NEW_CATEGORY', payload: newCategory});
      store.dispatch({type: 'UPDATE_CATEGORY', payload: newCategory});
      currentCategory = newCategory;
    }
    axios
      .post(
        'http://ec2-52-15-41-183.us-east-2.compute.amazonaws.com/api/add_card',
        {
          username,
          front,
          back,
          category: currentCategory,
          archived: false,
        },
      )
      .then(response => console.log(response));
  },
};
