import { createSelector } from 'reselect';

const postEntities = state => state.entities.posts;
const postIds = state => state.posts.ids;

export const postSelector = createSelector([postEntities, postIds], (entities, ids) => ids.map(id => entities[id]));

export default postSelector;
