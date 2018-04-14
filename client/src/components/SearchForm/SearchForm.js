import React, { Component } from 'react';

import './SearchForm.css'

class SearchForm extends Component {

  componentWillReceiveProps(nextProps) {
    const { history, search, executeSearch } = this.props;
    if (nextProps.search.term !== search.term) {
      executeSearch();
      if (history.location.pathname === '/') {
        history.push('/restaurants');
      }
    }
  }

  onImageUpload = (e) => {

    this.setState({ isLoading: true });

    const reader = new FileReader();
    const image = e.target.files[0];

    reader.onloadend = () => {
      this.props.registerSearchTerm('file', reader.result);
    };

    reader.readAsDataURL(image);

  };

  onSubmitHandler = (e) => {

    e.preventDefault();

    const { search, registerSearchTerm, registerSearchLocation }  = this.props;
    if (search.type === 'text') {
      let searchLocation = document.getElementById('searchLocation').value;
      let searchKeyword = document.getElementById('searchTerm').value;
      if (searchKeyword.trim() && searchLocation.trim()) {
        registerSearchTerm('term', searchKeyword.trim());
        registerSearchTerm('location', searchLocation.trim());
      } else {
        document.getElementById('searchTerm').value = '';
        document.getElementById('searchLocation').value = '';
      }
    } else if (search.type === 'file') {
      const fileData = new FormData();
      let searchLocation = document.getElementById('searchLocation').value;
      if (searchLocation.trim()) {
        fileData.append('images_file', this.props.search.file);
        registerSearchTerm('location', searchLocation.trim());
        this.props.fetchWatsonFileRequest(fileData);
      } else {
        document.getElementById('searchLocation').value = '';
      }
    }
  };


  render() {

    const { search, changeSearchType } = this.props;

    return (
      <form
        className="SearchForm"
        onSubmit={ this.onSubmitHandler }>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example">
          <button
            type="button"
            className={ `btn ${search.type === 'text' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={ () => changeSearchType('text')}>
            Search by name
          </button>
          <button
            type="button"
            className={ `btn ${search.type !== 'text' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={ () => changeSearchType('file')}>
            Search by image
          </button>
        </div>
        {
          this.props.search.type === 'text'
            ? (
              [<input
                type="text"
                id="searchLocation"
                placeholder="Enter the location"
                className="location form-control"
                name="location"
                key="location"
                required
              />,
              <p key="p" style={{'display': 'flex', 'justifyContent': 'space-between'}}>

                <input
                  type="text"
                  id="searchTerm"
                  placeholder="Enter the food name"
                  className="form-control"
                  name="term"
                  key="term"
                  required
                />
                  <button
                    type="submit"
                    className="btn btn-info"
                    >
                      search
                    </button>
              </p>
            ])
            : (
              <div className="input-group mb-3">
                {
                  search.file
                    ? (
                      <img
                        src={ search.file }
                        alt="food" />
                    )
                    : null
                }
                <div className="custom-file">
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    className="custom-file-input"
                    required
                    onChange={ this.onImageUpload }/>
                  <label className="custom-file-label" htmlFor="inputGroupFile02">
                    Choose file
                  </label>
                </div>
                <div className="location-wrapper">
                  <input
                    type="text"
                    id="searchLocation"
                    placeholder="Enter the location"
                    className="location form-control"
                    name="location"
                    key="location"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-info"
                    >
                      search
                    </button>
                </div>
              </div>
            )
        }

      </form>
    );
  }
}

export default SearchForm;
