import axios from 'axios';
import * as types from './types';

export function fetchArticles() {
  return {
    type: types.FETCH_ARTICLES,
  };
}

export function fetchArticlesSuccess(data) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    payload: data,
  };
}

export function fetchArticlesFailure(error) {
  return {
    type: types.FETCH_ARTICLES_FAILURE,
    error,
  };
}

export function fetchArticlesRequest(keyword) {
  return (dispatch) => {
    dispatch(fetchArticles());

    return axios.post('/api/articles', { keyword }).then((res) => {
      return dispatch(fetchArticlesSuccess(res.data));
    }).catch((e) => {
      return dispatch(fetchArticlesFailure(e));
    });
  };
}
