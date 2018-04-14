/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap-promise';
import './Restaurant.css';

class Restaurant extends Component {
  componentDidMount = () => {
    this.animateIn();
  }
  animateIn = () => {
    const { delay = 0 } = this.props;
    return animate.from(this.component, 1.5, { autoAlpha: 0, y: '-20px', ease: Bounce.easeOut, delay: delay });
  }
  render() {
    const { categories, name, phone, price, rating, url, image_url, location } = this.props;
    return (
      <div className="list-group restaurant-container" ref={el => this.component = el}>
        <a href={url} target="_blank"><img className="restaurant-image" src={image_url} alt={name} /></a>
        <div href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
            <div className="mb-1 restaurant-title">{ name }</div>
            <small>{ rating }</small>
          </div>
          <div>
            {
              categories.map((category) => {
                return (
                  <span
                    className="mb-1 category"
                    key={category.title}
                  >
                    { category.title }
                  </span>
                );
              })
            }
          </div>
          <div className="restaurant-address">{ location.address1 }</div>
          <div className="restaurant-city">{ location.city }</div>
          <p className="restaurant-phone">{ phone }</p>
        </div>
      </div>
    );
  }
}
Restaurant.defaultProps = {
  categories: [],
  name: 'ck',
  phone: '+16478711234',
  price: '$$',
  rating: 5,
  url: 'http://www.google.ca',
  location: {}
};

Restaurant.propTypes = {
  categories: PropTypes.array,
  name: PropTypes.string,
  phone: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  url: PropTypes.string,
  location: PropTypes.object
};
export default Restaurant;
