import { combineReducers } from 'redux';

import entities from './entities';
import currentUser from './currentUser';
import topics from './topics';
import subscriptions from './subscriptions';
import posts from './posts';

const appReducers = combineReducers({
  entities,
  currentUser,
  topics,
  subscriptions,
  posts
});

export default appReducers;
