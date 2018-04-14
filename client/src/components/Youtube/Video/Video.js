/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap-promise';

class Video extends Component {
  componentDidMount = () => {
    this.animateIn();
  }
  animateIn = () => {
    const { delay = 0 } = this.props;
    return animate.from(this.component, 1.5, { autoAlpha: 0, y: '-20px', ease: Bounce.easeOut, delay: delay });
  }
  render() {
    const { title, description, thumbnails, channelTitle, publishedAt, item } = this.props;
    const { medium } = thumbnails;
    const { url } = medium;
    const { id } = item;
    const { videoId } = id;
    return (
      <div className="list-group" key={videoId} ref={el => this.component = el}>
        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank"><img className="youtube-image" src={url} alt={url} /></a>
        <div className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className="youtube-title">
            <div className="mb-1">
              { title }
            </div>
          </a>
          </div>
          <div className="youtube-footer">
            <div className="youtube-date">{ publishedAt.substring(0, 10) }</div>
            <div className="youtube-channel-title">{ channelTitle }</div>
          </div>
        </div>
      </div>
    );
  }
}
Video.defaultProps = {

};

Video.propTypes = {

};
export default Video;
