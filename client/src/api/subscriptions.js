import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestSubscriptions() {
  return ajax('/api/subscriptions');
}
