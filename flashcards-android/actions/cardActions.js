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
  }
}
