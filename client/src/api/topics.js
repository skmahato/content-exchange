import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestTopics() {
  return ajax('/api/topics');
}
