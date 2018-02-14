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
    store.dispatch({type: 'TOGGLE_LOADING'});
    store.dispatch({type: 'UPDATE_CATEGORY', payload: newCategory});
    setTimeout(() => {
      store.dispatch({type: 'UPDATE_CATEGORY', payload: newCategory});
      setTimeout(() => store.dispatch({type: 'TOGGLE_LOADING'}), 25);
    }, 25);
  },
  updateNewCategory: text => {
    store.dispatch({type: 'UPDATE_NEW_CATEGORY', payload: text});
  },
  updateNewInput: (text, type) => {
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
    if (!categories.includes(newCategory) && newCategory.length > 0) {
      store.dispatch({type: 'NEW_CATEGORY', payload: newCategory});
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
      .then(response => console.log(response))
      .catch(err => console.log(err));
    store.dispatch({
      type: 'INSERT_CARD',
      payload: {
        username,
        front,
        back,
        category: currentCategory,
        archived: false,
      },
    });
    store.dispatch({type: 'UPDATE_CATEGORY', payload: currentCategory});
    store.dispatch({type: 'UPDATE_NEW_CATEGORY', payload: ''});
    store.dispatch({type: 'UPDATE_NEW_FRONT', payload: ''});
    store.dispatch({type: 'UPDATE_NEW_BACK', payload: ''});
  },
  unfetch: () => {
    store.dispatch({type: 'UNFETCH'});
  },
  toggleArchiving: (card, currentCategory) => {
    axios
      .post(
        'http://ec2-52-15-41-183.us-east-2.compute.amazonaws.com/api/add_card',
        {
          username: card.username,
          front: card.front,
          back: card.back,
          category: currentCategory,
          archived: !card.archived,
        },
      )
      .then(response => console.log(response))
      .catch(err => console.log(err));
    store.dispatch({type: 'TOGGLE_ARCHIVED', payload: card});
    setTimeout(() => {
      store.dispatch({type: 'UPDATE_CATEGORY', payload: card.category});
    }, 300);
  },
  deleteCard: card => {
    axios
      .post(
        'http://ec2-52-15-41-183.us-east-2.compute.amazonaws.com/api/delete_one',
        {
          front: card.front,
          category: card.category,
          username: card.username,
        },
      )
      .then(response => console.log(response))
      .catch(err => console.log(err));
    store.dispatch({type: 'DELETE_CARD', payload: card});
    setTimeout(() => {
      store.dispatch({type: 'UPDATE_CATEGORY', payload: card.category});
    }, 300);
  },
};
