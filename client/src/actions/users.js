import { createAction } from 'redux-actions';
import {
  REQUEST_CURRENT_USER_SUCCESS,
  REQUEST_CURRENT_USER_FAILURE
} from '../constants/actionTypes';

import * as User from '../api/users';

/* eslint-disable import/prefer-default-export */
const requestUserSuccess = createAction(REQUEST_CURRENT_USER_SUCCESS);
const requestUserFailure = createAction(REQUEST_CURRENT_USER_FAILURE);

export function requestCurrentUser() {
  return dispatch => User.requestCurrentUser()
    .then(({ data }) => dispatch(requestUserSuccess(data)))
    .catch(error => dispatch(requestUserFailure(error)));
}
