import { createAction } from 'redux-actions';
import {
  REQUEST_SUBSCRIPTIONS_SUCCESS,
  REQUEST_SUBSCRIPTIONS_FAILURE,
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_FAILURE,
  DELETE_SUBSCRIPTION_SUCCESS,
  DELETE_SUBSCRIPTION_FAILURE
} from '../constants/actionTypes';

import * as Subscription from '../api/subscriptions';

/* eslint-disable import/prefer-default-export */
const requestSubscriptionSuccess = createAction(REQUEST_SUBSCRIPTIONS_SUCCESS);
const requestSubscriptionFailure = createAction(REQUEST_SUBSCRIPTIONS_FAILURE);

export function requestSubscriptions() {
  return dispatch => Subscription.requestSubscriptions()
    .then(({ data }) => dispatch(requestSubscriptionSuccess(data)))
    .catch(error => dispatch(requestSubscriptionFailure(error)));
}

const createSubscriptionSuccess = createAction(CREATE_SUBSCRIPTION_SUCCESS);
const createSubscriptionFailure = createAction(CREATE_SUBSCRIPTION_FAILURE);

export function createSubscription(params) {
  return dispatch => Subscription.createSubscription(params)
    .then(({ data }) => dispatch(createSubscriptionSuccess(data)))
    .catch(error => dispatch(createSubscriptionFailure(error)));
}

const deleteSubscriptionSuccess = createAction(DELETE_SUBSCRIPTION_SUCCESS);
const deleteSubscriptionFailure = createAction(DELETE_SUBSCRIPTION_FAILURE);

export function deleteSubscription(params) {
  return dispatch => Subscription.deleteSubscription(params)
    .then(({ data }) => dispatch(deleteSubscriptionSuccess(data)))
    .catch(error => dispatch(deleteSubscriptionFailure(error)));
}
