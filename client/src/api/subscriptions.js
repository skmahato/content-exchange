import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestSubscriptions() {
  return ajax('/api/subscriptions');
}

export function createSubscription(data) {
  return ajax('/api/subscriptions', { method: 'POST', data });
}

export function deleteSubscription(id) {
  return ajax(`/api/subscriptions/${id}`, { method: 'DELETE' });
}
