import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoadingCircle.css';

class LoadingCircle extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader" />
      </div>
    );
  }
}

export default LoadingCircle;
