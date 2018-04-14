/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap-promise';

class Recipe extends Component {
  componentDidMount = () => {
    this.animateIn();
  }
  animateIn = () => {
    const { delay = 0 } = this.props;
    return animate.from(this.component, 1.5, { autoAlpha: 0, y: '-20px', ease: Bounce.easeOut, delay: delay });
  }
  render() {
    const { recipe } = this.props;
    return (
      <div key={ recipe.title.length } className="list-group" ref={el => this.component = el}>
        <img className="recipe-image" src={recipe.image_url} alt={recipe.title} />
        <div href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="mb-1 recipe-title">{ recipe.title }</div>
          <div className="recipe-social-rank">social rank: { Math.round(recipe.social_rank * 100) / 100 }</div>
          <a href={recipe.source_url} target="_blank" className="recipe-url">
            Go to recipe
          </a>
        </div>
      </div>
    );
  }
}
export default Recipe;
