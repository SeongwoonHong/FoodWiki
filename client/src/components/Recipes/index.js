import { connect } from 'react-redux';
import * as actions from '../../actions';

import Recipes from './Recipes';

function mapStateToProps(state) {
  return {
    search: state.search,
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipesRequest: (term) => dispatch(actions.fetchRecipesRequest(term))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
