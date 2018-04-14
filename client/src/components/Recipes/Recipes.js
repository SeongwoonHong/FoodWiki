import React, { Component } from 'react';
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import EmptyResult from '../EmptyResult/EmptyResult';
import Recipe from './Recipe/Recipe';
import './Recipes.css'

class Recipes extends Component {

  componentDidMount() {

    const { search, fetchRecipesRequest, recipes } = this.props;
    if (search.term && !recipes.list.length) {
      fetchRecipesRequest(search.term);
    }

  }

  componentWillReceiveProps(nextProps) {

    const { search, fetchRecipesRequest } = this.props;

    if (nextProps.search.term !== search.term) {
      fetchRecipesRequest(nextProps.search.term);
    }

  }

  render() {

    const { recipes } = this.props;

    return (
      <div>
        {
          recipes.status === 'INIT' && <EmptyResult />
        }
        {
          recipes.status === 'WAITING' && <LoadingCircle />
        }
        {
          recipes.list.map((recipe, index) => {
            return (
              <Recipe
                recipe={recipe}
                delay={index / recipes.list.length}
                key={recipe.source_url}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Recipes;
