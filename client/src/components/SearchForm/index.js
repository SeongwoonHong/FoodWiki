import { connect } from 'react-redux';
import * as actions from '../../actions';

import SearchForm from './SearchForm';

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSearchType: (type) => dispatch(actions.changeSearchType(type)),
    registerSearchTerm: (type, value) => dispatch(actions.registerSearchTerm(type, value)),
    executeSearch: () => dispatch(actions.executeSearch())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
