import { connect } from 'react-redux';
import * as actions from '../../actions';

import Restaurants from './Restaurants';

function mapStateToProps(state) {
  return {
    search: state.search,
    yelp: state.yelp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchYelpRequest: (term, location) => dispatch(actions.fetchYelpRequest(term, location))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
