import { connect } from 'react-redux';
import * as actions from '../../actions';
import Articles from './Articles';

function mapStateToProps(state) {
  return {
    articles: state.articles,
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticlesRequest: (keyword) => {
      return dispatch(actions.fetchArticlesRequest(keyword));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
