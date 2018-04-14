import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import './Youtube.css';
import EmptyResult from '../EmptyResult/EmptyResult';
import Video from './Video/Video';

class Youtube extends Component {
  componentDidMount = () => {
    const { search } = this.props;
    if (search.term && !this.props.youtube.payload) {
      this.props.fetchYoutubeRequest(search.term).then((res) => {
        // console.log(res.payload.items);
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    const { search, fetchYoutubeRequest } = this.props;
    if (nextProps.search.term !== search.term) {
      fetchYoutubeRequest(nextProps.search.term);
    }
  }
  renderYoutube = () => {
    return this.props.youtube.payload.items.map((item, index) => {
      const { title, description, thumbnails, channelTitle, publishedAt } = item.snippet;
      return (
        <Video
          item={item}
          publishedAt={publishedAt}
          title={title}
          description={description}
          thumbnails={thumbnails}
          channelTitle={channelTitle}
          key={item.id.videoId}
          delay={index / this.props.youtube.payload.items.length}
        />
      );
    })
  }
  render() {
    return (
      <div id="youtube">
        {
          this.props.youtube.status === 'INIT' && <EmptyResult />
        }
        {
          this.props.youtube.status === 'WAITING' && <LoadingCircle />
        }
        {
          this.props.youtube.status === 'SUCCESS' && this.renderYoutube()
        }
      </div>
    );
  }
}
Youtube.defaultProps = {

};

Youtube.propTypes = {

};
export default Youtube;
