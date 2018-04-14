import axios from 'axios';
import * as types from './types';

export function fetchWatsonUrlRequest() {
  return (dispatch) => {
    const params = {
      url: 'http://img.hankyung.com/photo/201710/01.14980249.1.jpg'
    }
    return axios.post('/watson/url', params)
      .then((response) => {
      }).catch((error) => {
        console.log(error);
      });
  };
}

export function fetchWatsonFile() {
  return {
    type: types.FETCH_WATSON
  };
}

export function fetchWatsonFileSuccess(data) {
  return {
    type: types.FETCH_WATSON_SUCCESS,
    payload: data
  };
}

export function fetchWatsonFileFailure(error) {
  return {
    type: types.FETCH_WATSON_FAILURE,
    error
  };
}

export function fetchWatsonFileRequest(value) {
  return (dispatch) => {
    dispatch(fetchWatsonFile());

    return axios.post('/watson/file', value).then((res) => {
      return dispatch(fetchWatsonFileSuccess(res));
    }).catch((e) => {
      return dispatch(fetchWatsonFileFailure(e));
    });
  };
}
