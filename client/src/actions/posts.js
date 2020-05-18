import { createAction } from 'redux-actions';
import {
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILURE,
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_FAILURE
} from '../constants/actionTypes';

import * as Post from '../api/posts';

/* eslint-disable import/prefer-default-export */
const requestPostSuccess = createAction(REQUEST_POSTS_SUCCESS);
const requestPostFailure = createAction(REQUEST_POSTS_FAILURE);

export function requestPosts() {
  return dispatch => Post.requestPosts()
    .then(({ data }) => dispatch(requestPostSuccess(data)))
    .catch(error => dispatch(requestPostFailure(error)));
}

const createPostSuccess = createAction(CREATE_POSTS_SUCCESS);
const createPostFailure = createAction(CREATE_POSTS_FAILURE);

export function createPost(params) {
  return dispatch => Post.createPost(params)
    .then(({ data }) => dispatch(createPostSuccess(data)))
    .catch(error => dispatch(createPostFailure(error)));
}
