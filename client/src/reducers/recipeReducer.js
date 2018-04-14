import * as types from '../actions/types';

const initialState = {
  recipe: {
    list: [],
    status: 'INIT',
    error: null,
  },
};

export default function (state = initialState.recipe, action) {
  switch (action.type) {
    case types.FETCH_RECIPES:
      return Object.assign({}, state, {
        status: 'WAITING',
      });
    case types.FETCH_RECIPES_FAILURE:
      return Object.assign({}, state, {
        list: [],
        status: 'FAILURE',
        error: action.error,
      });
    case types.RECIPES_RETURNED:
      return Object.assign({}, state, {
        list: action.payload,
        status: 'SUCCESS',
      });
    default:
      return state;
  }
}
