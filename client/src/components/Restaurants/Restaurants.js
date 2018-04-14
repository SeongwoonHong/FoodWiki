import React, { Component } from 'react';
import Restaurant from './Restaurant/Restaurant';
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import EmptyResult from '../EmptyResult/EmptyResult';

class Restaurants extends Component {

  componentDidMount() {

    const { search, fetchYelpRequest, yelp } = this.props;
    if (search.term && !yelp.payload) {
      fetchYelpRequest(search.term, search.location);
    }
  }

  componentWillReceiveProps(nextProps) {

    const { search, fetchYelpRequest } = this.props;
    if (search.type === 'file' && search.location && (nextProps.search.term !== search.term || nextProps.search.location !== search.location)) {
      fetchYelpRequest(nextProps.search.term, nextProps.search.location);
    }
    if (search.type === 'text' && (nextProps.search.term !== search.term || nextProps.search.location !== search.location)) {
      fetchYelpRequest(nextProps.search.term, nextProps.search.location);
    }
  }
  render() {

    const { yelp, search } = this.props;
    return (
      <div>
        {
          search.status === 'WAITING' || !yelp.payload && yelp.status === 'INIT' && <EmptyResult />
        }
        {
          yelp.status === 'WAITING' && <LoadingCircle />
        }
        {
          search.status === 'WAITING' && <LoadingCircle />
        }
        {
          yelp.payload && yelp.payload.map((business, index) => {
            return (
              <Restaurant
                categories={ business.categories }
                name={ business.name }
                phone={ business.display_phone }
                price={ business.price }
                rating={ business.rating }
                image_url={ business.image_url }
                url={ business.url }
                location={ business.location }
                key={ business.url }
                delay={index / yelp.payload.length}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Restaurants;
