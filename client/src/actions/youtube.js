import axios from 'axios';
import * as types from './types';

export function fetchYoutube() {
  return {
    type: types.FETCH_YOUTUBE
  };
}

export function fetchYoutubeSuccess(data) {
  return {
    type: types.FETCH_YOUTUBE_SUCCESS,
    payload: data
  };
}

export function fetchYoutubeFailure(error) {
  return {
    type: types.FETCH_YOUTUBE_FAILURE,
    error
  };
}

export function fetchYoutubeRequest(term) {
  return (dispatch) => {
    dispatch(fetchYoutube());

    return axios.post('/api/youtube', { term }).then((res) => {
      return dispatch(fetchYoutubeSuccess(res.data));
    }).catch((e) => {
      return dispatch(fetchYoutubeFailure(e));
    })
  }
}
