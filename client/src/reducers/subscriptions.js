import { remove } from 'lodash';

import {
  REQUEST_SUBSCRIPTIONS_SUCCESS,
  REQUEST_SUBSCRIPTIONS_FAILURE,
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_FAILURE,
  DELETE_SUBSCRIPTION_SUCCESS,
  DELETE_SUBSCRIPTION_FAILURE
} from '../constants/actionTypes';

const INITIAL_STATE = { ids: [], error: null };

export default function subscriptions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SUBSCRIPTIONS_SUCCESS:
      return {
        ids: action.payload.data.map(data => parseInt(data.id, 10)),
        error: null
      };
    case REQUEST_SUBSCRIPTIONS_FAILURE:
      return {
        ...state,
        ids: [],
        error: action.payload.message
      };
    case CREATE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        ids: [...state.ids, parseInt(action.payload.data.id, 10)],
        error: null
      };
    case CREATE_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    case DELETE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        ids: remove(state.ids, key => key !== parseInt(action.payload.data.id, 10)),
        error: null
      };
    case DELETE_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
}
