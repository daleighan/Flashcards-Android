import { combineReducers } from "redux";

import auth from './authReducers';
import cards from './cardReducers';

export default combineReducers({
  auth,
  cards,
});
