import {
  REQUEST_TOPIC_SUCCESS,
  REQUEST_TOPIC_FAILURE,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC_FAILURE
} from '../constants/actionTypes';

const INITIAL_STATE = { ids: [], error: null };

export default function topics(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_TOPIC_SUCCESS:
      return {
        ids: action.payload.data.map(data => parseInt(data.id, 10)),
        error: null
      };
    case REQUEST_TOPIC_FAILURE:
      return {
        ...state,
        ids: [],
        error: action.payload.message
      };
    case CREATE_TOPIC_SUCCESS:
      return {
        ...state,
        ids: [...state.ids, parseInt(action.payload.data.id, 10)],
        error: null
      };
    case CREATE_TOPIC_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
}
