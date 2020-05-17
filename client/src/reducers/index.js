import { combineReducers } from 'redux';

import entities from './entities';
import currentUser from './currentUser';
import topics from './topics';
import subscriptions from './subscriptions';

const appReducers = combineReducers({
  entities,
  currentUser,
  topics,
  subscriptions
});

export default appReducers;
