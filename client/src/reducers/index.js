import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import yelpReducer from './yelpReducer';
import articlesReducer from './articlesReducer';
import youtubeReducer from './youtubeReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  search: searchReducer,
  yelp: yelpReducer,
  articles: articlesReducer,
  youtube: youtubeReducer,
  recipes: recipeReducer,
});
