import { createSelector } from 'reselect';

const topicEntities = state => state.entities.topics;
const topicIds = state => state.topics.ids;

export const topicSelector = createSelector([topicEntities, topicIds], (entities, ids) => ids.map(id => entities[id]));

export default topicSelector;
