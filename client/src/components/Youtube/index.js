import { connect } from 'react-redux';
import * as actions from '../../actions';

import Youtube from './Youtube';

function mapStateToProps(state) {
  return {
    youtube: state.youtube,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchYoutubeRequest: (term) => {
      return dispatch(actions.fetchYoutubeRequest(term));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Youtube);
