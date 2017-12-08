import { combineReducers } from "redux";

import authReducers from './authReducers';
import cardReducers from './cardReducers';

export default combineReducers({
  authReducers,
  cardReducers
});
