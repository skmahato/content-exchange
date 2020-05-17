import { combineReducers } from 'redux';

import entities from './entities';
import currentUser from './currentUser';
import topics from './topics';

const appReducers = combineReducers({
  entities,
  currentUser,
  topics
});

export default appReducers;
