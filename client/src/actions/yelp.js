import axios from 'axios';
import * as types from './types';

export function fetchYelp() {
  return {
    type: types.FETCH_YELP
  };
}

export function fetchYelpSuccess(data) {
  return {
    type: types.FETCH_YELP_SUCCESS,
    payload: data
  };
}

export function fetchYelpFailure(error) {
  return {
    type: types.FETCH_YELP_FAILURE,
    error
  };
}

export function fetchYelpRequest(term, location) {
  return (dispatch) => {
    dispatch(fetchYelp());

    return axios.post('/api/yelp', { term, location }).then((res) => {
      return dispatch(fetchYelpSuccess(res.data));
    }).catch((e) => {
      return dispatch(fetchYelpFailure(e));
    });
  };
}
