import ajax from './ajax';

/* eslint-disable import/prefer-default-export */
export function requestPosts() {
  return ajax('/api/posts');
}

export function createPost(data) {
  return ajax('/api/posts', { method: 'POST', data, formData: true });
}
