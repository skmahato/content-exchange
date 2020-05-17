import {
  REQUEST_SUBSCRIPTIONS_SUCCESS,
  REQUEST_SUBSCRIPTIONS_FAILURE
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
    default:
      return state;
  }
}
