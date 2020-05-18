import { createSelector } from 'reselect';

const postEntities = state => state.entities.posts;
const topicEntities = state => state.entities.topics;
const postIds = state => state.posts.ids;

export const postSelector = createSelector([postEntities, topicEntities, postIds], (entities, topics, ids) => ids.map(id => {
  const entity = entities[id];
  const topicsData = entity.topics.map(f => topics[f.id]);
  return {...entity, topics: topicsData};
}));

export default postSelector;
