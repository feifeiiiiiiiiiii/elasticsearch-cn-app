import { combineReducers } from 'redux';
import topic from './topic';
import user from './user';
import explore from './explore';

const rootReducer = combineReducers({
  topic,
  user,
  explore
});

export default rootReducer;
