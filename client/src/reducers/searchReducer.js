import * as types from '../actions/types';

const initialState = {
  search: {
    isSearching: false,
    term: '',
    file: '',
    location: '',
    type: 'text',
    recipes: [],
  },
  watson: {
    status: 'INIT'
  }
};

export default function (state = initialState.search, action) {
  switch (action.type) {

    case types.CHANGE_SEARCH_TYPE:
      return Object.assign({}, state, {
          type: action.payload
      });

    case types.REGISTER_SEARCH_TERM:
      return Object.assign({}, state, {
            [action.payload.type]: action.payload.value
      });

    case types.EXECUTE_SEARCH:
      return Object.assign({}, state, {
            isSearching: false
      });
    case types.FETCH_WATSON:
      return Object.assign({}, state, {
            status: 'WAITING'
      });

    case types.FETCH_WATSON_SUCCESS:
      return Object.assign({}, state, {
          status: 'SUCCESS',
          term: action.payload.data
      });

    case types.FETCH_WATSON_FAILURE:
      return Object.assign({}, state, {
          status: 'FAILURE'
      });
    default:
      return state;

  }

}
