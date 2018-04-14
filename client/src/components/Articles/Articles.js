import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article/Article';
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import EmptyResult from '../EmptyResult/EmptyResult';

class Articles extends Component {
  componentDidMount = () => {
    const { search } = this.props; // 나중에 search.term으로 밑에 api콜 해야함.
    if (search.term && !this.props.articles.payload) {
      this.props.fetchArticlesRequest(search.term);
    }
  }
  componentWillReceiveProps(nextProps) {
    const { search, fetchArticlesRequest } = this.props;
    if (nextProps.search.term !== search.term) {
      fetchArticlesRequest(nextProps.search.term);
    }
  }
  renderArticles = () => {
    return this.props.articles.payload.articles.map((article, index) => {
      return (
        <Article
          author={article.author}
          description={article.description}
          title={article.title}
          url={article.url}
          urlToImage={article.urlToImage}
          key={article.url}
          date={article.publishedAt}
          delay={index / this.props.articles.payload.articles.length}
        />
      );
    })
  }
  render() {
    return (
      <div id="news">
        {
          this.props.articles.status === 'INIT' && <EmptyResult />
        }
        {
          this.props.articles.status === 'WAITING' && <LoadingCircle />
        }
        {
          this.props.articles.status === 'SUCCESS' && this.renderArticles()
        }
      </div>
    );
  }
}
Articles.defaultProps = {

};

Articles.propTypes = {

};
export default Articles;
