import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap-promise';
import './EmptyResult.css';

class EmptyResult extends Component {
  componentDidMount = () => {
    animate.from(this.component, 0.5, { autoAlpha: 0 });
  }
  render() {
    return (
      <div className="empty-result alert alert-success" role="alert" ref={el => this.component = el}>
        <h4 className="alert-heading">Empty Result</h4>
        <p>Try to use the search bar above!</p>
        <hr />
      </div>
    );
  }
}

export default EmptyResult;
