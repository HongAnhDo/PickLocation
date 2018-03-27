import React, { Component } from 'react';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'
import '../styles/InputPlaceBottom.css';
import PlacesAutocomplete from '../custom/PlacesAutocomplete'


const renderSuggestion = ({ formattedSuggestion }) => (
  <div className="Demo__suggestion-item-bottom">
    <div style={{ height: '100%', display: 'inline',  color: "#979797" }}>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '13px' }}>
        <i className="zmdi zmdi-pin" style={{ marginRight: 10, height: '100%', display: 'inline', color: "#979797", fontSize: '15px' }}></i>
        {formattedSuggestion.address}
      </div>
    </div>
  </div>
);


const renderFooter = () => (
  <div className="Demo__dropdown-footer">
    <div style={{ width: '100%', height: '30px', textAlign: 'right' }}>
      <img
        src={require('../images/powered_by_google_default.png')}
        className="Demo__dropdown-footer-image"
      />
    </div>
  </div>
);

const cssClasses = {
  root: 'form-group',
  input: 'Demo__search-input',
  autocompleteContainer: 'Demo__autocomplete-container-bottom',
};

const shouldFetchSuggestions = ({ value }) => value.length >= 2;

const onError = (status, clearSuggestions) => {

  console.log(
    'Error happened while fetching suggestions from Google Maps API',
    status
  );

  clearSuggestions();
};

class InputPlaceBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false,
      idPlace: ""
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSelect(address, idPlace) {
    this.setState({
      address,
      loading: true,
      idPlace: idPlace
    });

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Geocode Success', { lat, lng }); // eslint-disable-line no-console
        this.setState({
          // geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false,
        });
      })
      .catch(error => {
        console.log('Geocode Error', error); // eslint-disable-line no-console
        this.setState({
          // geocodeResults: this.renderGeocodeFailure(error),
          loading: false,
        });
      });
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null,
    });
  }

  renderGeocodeFailure(err) {
    return (
      <div className="alert_alert-danger" role="alert" >
        <strong>Error!</strong> {err}
      </div>
    );
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <div className="alert_alert-success" role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude:{' '}
        <strong>
          {lat}, {lng}
        </strong>
      </div>
    );
  }

  render() {
    console.log(this.state.idPlace);
    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: () => {
        console.log('Blur event!'); // eslint-disable-line no-console
      },
      onFocus: () => {
        console.log('Focused!'); // eslint-disable-line no-console
      },
      autoFocus: false,
      name: 'Demo__input',
      id: 'my-input-id',
    };

    return (
      <div className="input_place">
        <PlacesAutocomplete
          renderSuggestion={renderSuggestion}
          renderFooter={renderFooter}
          inputProps={inputProps}
          classNames={cssClasses}
          onSelect={this.handleSelect}
          onEnterKeyDown={this.handleSelect}
          onError={onError}
          shouldFetchSuggestions={shouldFetchSuggestions}
          hintTextInput={this.props.hintTextInput}
          onSelectPlace={this.props.onSelectPlace}
          // isDisable = {this.props.isDisable}

        />

        {this.state.loading && (
          <div>
            <i className="Demo__spinner" />
          </div>
        )}
        {this.state.geocodeResults && (
          <div className="geocoding-results">{this.state.geocodeResults}</div>
        )}
      </div>
    );
  }
}


export default InputPlaceBottom;