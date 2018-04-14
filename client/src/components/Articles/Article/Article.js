/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap-promise';
import './Article.css';

class Article extends Component {
  componentDidMount = () => {
    this.animateIn();
  }
  animateIn = () => {
    const { delay = 0 } = this.props;
    return animate.from(this.component, 1.5, { autoAlpha: 0, y: '-20px', ease: Bounce.easeOut, delay: delay });
  }
  render() {
    const { author, description, title, url, urlToImage, date } = this.props;
    return (
      <div className="article" ref={el => this.component = el}>
        <div className="list-group">
          <div className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
              <a href={url} className="mb-1 article-url" target="_blank">{ title }</a>
            </div>
            <p className="mb-1 article-description">{ description }</p>
            <div className="article-footer">
              <div className="article-date">{ date.substring(0, 10) }</div>
              <span className="article-author">{ author }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Article.defaultProps = {
  author: 'author',
  description: 'description',
  title: 'title',
  url: 'url',
  urlToImage: 'url'
};

Article.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string
};
export default Article;
