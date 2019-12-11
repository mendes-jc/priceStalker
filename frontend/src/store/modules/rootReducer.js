import { combineReducers } from 'redux';

import user from './user/reducer';
import alerts from './alerts/reducer';

export default combineReducers({
  user,
  alerts,
});
