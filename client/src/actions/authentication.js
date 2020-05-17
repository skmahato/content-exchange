import { createAction } from 'redux-actions';
import {
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE
} from '../constants/actionTypes';

import * as Auth from '../api/authentication';
import { requestCurrentUser } from './users';
import { setToken } from '../helpers/localStorageCache';

/* eslint-disable import/prefer-default-export */
const loginUserSuccess = createAction(REQUEST_LOGIN_SUCCESS);
const loginFailure = createAction(REQUEST_LOGIN_FAILURE);

export function requestLogin(loginData) {
  return dispatch => Auth.requestLogin(loginData)
    .then(({ data }) => {
      setToken('jwtToken', data.meta.jwtToken);
      dispatch(loginUserSuccess(data));
      return dispatch(requestCurrentUser());
    })
    .catch(error => dispatch(loginFailure(error)));
}
