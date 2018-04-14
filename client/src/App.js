import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import * as actions from './actions';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from './components/Articles';
import Restaurants from './components/Restaurants';
import Youtube from './components/Youtube';
import './App.css';
import SearchForm from './components/SearchForm';
import Recipes from './components/Recipes';
import Nutrition from './components/Nutrition/Nutrition';

class App extends Component {
  callYelp = (term, location) => {
    this.props.fetchYelpRequest(term, location).then((data) => {
    });
  }

  fetchWatsonFileRequest = (submitData) => {
    this.props.fetchWatsonFileRequest(submitData).then((data) => {
    });
  }
  render() {

    const { history, search } = this.props;

    return (
      <div className="App">
        <header className="navbar navbar-expand-lg bg-dark">
          <Link to="/" style={{'margin': '0 auto'}}>
            FoodWikipedia
          </Link>
        </header>
        <div className="container-fluid">
          <div className="contents">
            <div className="header">
              <SearchForm
                history={ history }
                fetchWatsonFileRequest={this.fetchWatsonFileRequest}/>
            </div>
            <div className="body">
              {
                search.term
                  ? <div className="search-result">RESULTS</div>
                  : null
              }
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink
                    to="/restaurants"
                    className="nav-link">
                    Restaurants
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/recipes"
                    className="nav-link">
                    Recipes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/nutrition"
                    className="nav-link">
                    Nutrition
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/news"
                    className="nav-link">
                    News
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/youtube"
                    className="nav-link">
                    Videos
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Route path="/recipes" component={ Recipes } />
                <Route path="/restaurants" component={ Restaurants } />
                <Route path="/news" component={Articles} />
                <Route path="/youtube" component={Youtube} />
                <Route path="/Nutrition" component={Nutrition} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    youtube: state.youtube
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchYelpRequest: (term, location) => {
      return dispatch(actions.fetchYelpRequest(term, location));
    },
    fetchWatsonUrlRequest: () => {
      return dispatch(actions.fetchWatsonUrlRequest());
    },
    fetchWatsonFileRequest: (value) => {
      return dispatch(actions.fetchWatsonFileRequest(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
