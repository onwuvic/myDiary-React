import { combineReducers } from 'redux';

import user from './userReducer';
import event from './eventListenerReducer';
import diary from './diaryReducer';

const reducers = combineReducers({
  diary,
  event,
  user
});

export default reducers;
