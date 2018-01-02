import store from '../store';
import axios from 'axios';

module.exports = {
  initialFetch: (username) => {
    axios.get(`http://ec2-52-15-41-183.us-east-2.compute.amazonaws.com/api/all_by_user/?username=${username}`)
      .then((response) => console.log(response));
  }
}
