/* eslint-disable max-len */
import * as types from '../actions/types';

const initialState = {
  status: 'INIT',
  payload: null,
};

export default function yelpReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_YOUTUBE:
      return {
        status: 'WAITING',
      };
    case types.FETCH_YOUTUBE_SUCCESS:
      return {
        status: 'SUCCESS',
        payload: action.payload,
      };
    case types.FETCH_YOUTUBE_FAILURE:
      return {
        status: 'FAILURE',
        payload: action.error,
      };
    default:
      return state;
  }
}
