import * as types from './types';
import axios from 'axios';

export const fetchRecipes = () => {
  return {
    type: types.FETCH_RECIPES
  }
};

export const fetchRecipesFailure = (error) => {
  return {
    type: types.FETCH_RECIPES_FAILURE,
    error
  }
}

export const fetchRecipesRequest = (term) => {
  return (dispatch) => {
    dispatch(fetchRecipes());
    axios
    .get(`/api/recipes/search/${term}`)
    .then(res => {
      dispatch(recipesReturned(res.data.recipes));
    }).catch((e) => {
      dispatch(fetchRecipesFailure(e));
    });
  };
}
export const recipesReturned = (recipes) => {
  return {
    type: types.RECIPES_RETURNED,
    payload: recipes
  }
};
