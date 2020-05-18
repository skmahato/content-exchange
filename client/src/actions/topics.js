import { createAction } from 'redux-actions';
import {
  REQUEST_TOPIC_SUCCESS,
  REQUEST_TOPIC_FAILURE,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC_FAILURE
} from '../constants/actionTypes';

import * as Topic from '../api/topics';

/* eslint-disable import/prefer-default-export */
const requestTopicSuccess = createAction(REQUEST_TOPIC_SUCCESS);
const requestTopicFailure = createAction(REQUEST_TOPIC_FAILURE);

export function requestTopics() {
  return dispatch => Topic.requestTopics()
    .then(({ data }) => dispatch(requestTopicSuccess(data)))
    .catch(error => dispatch(requestTopicFailure(error)));
}

const createTopicSuccess = createAction(CREATE_TOPIC_SUCCESS);
const createTopicFailure = createAction(CREATE_TOPIC_FAILURE);

export function createTopic(params) {
  return dispatch => Topic.createTopic(params)
    .then(({ data }) => dispatch(createTopicSuccess(data)))
    .catch(error => dispatch(createTopicFailure(error)));
}
