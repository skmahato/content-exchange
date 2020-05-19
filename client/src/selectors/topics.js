import { createSelector } from 'reselect';

const topicEntities = state => state.entities.topics;
const topicIds = state => state.topics.ids;
const subscribedTopicIds = state => {
  const keys = Object.keys(state.entities.subscriptions);
  return keys.map(key => parseInt(state.entities.subscriptions[key].topic.id, 10))
}

export const subscribedTopics = createSelector([topicEntities, subscribedTopicIds], (entities, ids) => ids.map(id => entities[id]))

export const topicSelector = createSelector([topicEntities, topicIds], (entities, ids) => ids.map(id => entities[id]));

export default topicSelector;
