import { createSelector } from 'reselect';

const subscriptionEntities = state => state.entities.subscriptions;
const subscriptionIds = state => state.subscriptions.ids;

export const subscriptionSelector = createSelector([subscriptionEntities, subscriptionIds], (entities, ids) => ids.map(id => entities[id]));

export default subscriptionSelector;
