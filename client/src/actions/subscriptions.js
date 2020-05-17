import { createAction } from 'redux-actions';
import {
  REQUEST_SUBSCRIPTIONS_SUCCESS,
  REQUEST_SUBSCRIPTIONS_FAILURE
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
