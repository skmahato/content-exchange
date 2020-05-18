import {
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILURE,
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_FAILURE
} from '../constants/actionTypes';

const INITIAL_STATE = { ids: [], error: null };

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_POSTS_SUCCESS:
      return {
        ids: action.payload.data.map(data => parseInt(data.id, 10)),
        error: null
      };
    case REQUEST_POSTS_FAILURE:
      return {
        ...state,
        ids: [],
        error: action.payload.message
      };
    case CREATE_POSTS_SUCCESS:
      return {
        ...state,
        ids: [parseInt(action.payload.data.id, 10), ...state.ids],
        error: null
      };
    case CREATE_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
}
