/* eslint-disable max-len */
import * as types from '../actions/types';

const initialState = {
  status: 'INIT',
  payload: null
};

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES:
      return {
        status: 'WAITING'
      };
    case types.FETCH_ARTICLES_SUCCESS:
      return {
        status: 'SUCCESS',
        payload: action.payload
      }
    case types.FETCH_ARTICLES_FAILURE:
      return {
        status: 'FAILURE',
        payload: action.error
      }
  }
  return state;
}
