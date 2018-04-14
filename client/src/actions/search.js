import * as types from './types';

export const changeSearchType = (type) => {
  return {
    type: types.CHANGE_SEARCH_TYPE,
    payload: type
  }
};

export const registerSearchTerm = (type, value) => {
  return {
    type: types.REGISTER_SEARCH_TERM,
    payload: { type, value },
  }
};

export const executeSearch = () => {
  return (dispatch, getState) => {
    const { search } = getState();
    console.log(search.term, search.type);
  };
};
