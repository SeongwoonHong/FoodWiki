import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap-promise';
import './Nutrition.css';

class Nutrition extends Component {
  componentDidMount = () => {
    animate.from(this.component, 0.5, { autoAlpha: 0 });
  }
  render() {
    return (
      <div ref={el => this.component = el} className="nutirion-container alert alert-warning alert-dismissible">
        not implemented yet..
        stay tuned!
      </div>
    );
  }
}

export default Nutrition;
