import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputPlaceTop from './InputPlaceTop'
import InputPlaceBottom from './InputPlaceBottom'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../styles/PickLocation.css'
import { blue500 } from 'material-ui/styles/colors'
import VarConf from '../localstorage/VarConf'
import MyMapComponent from '../constant/GoogleMap'


class PickLocation extends Component {
  myStorage = window.localStorage;
  constructor(props) {
    super(props)
    this.state = {
      addressPickUp: "",
      idPlacePickUp: "",
      addressDrop: "",
      idPlaceDrop: "",
      isDisplayMap: false,
      typePlace: 1,
      isFocus: false
    }
    this.onSelectPlacePickUp = this.onSelectPlacePickUp.bind(this);
    this.onSelectPlaceDrop = this.onSelectPlaceDrop.bind(this);
    this.onFocusSearchPlace = this.onFocusSearchPlace.bind(this);

  }

  onSelectPlacePickUp(address, idPlace) {
    this.setState({
      addressPickUp: address,
      idPlacePickUp: idPlace
    });

    // reactLocalStorage.set(VarConf.pick_local.addressPickUp, address);
    // reactLocalStorage.set(VarConf.pick_local.idPlacePickUp, idPlace);
    localStorage.setItem('address', address);
    localStorage.setItem('idPlace', idPlace);

  }

  onSelectPlaceDrop(address, idPlace) {
    // reactLocalStorage.set(VarConf.pick_local.addressDrop, address);
    // reactLocalStorage.set(VarConf.pick_local.idPlaceDrop, idPlace);
  

    // this.setState({
    //   addressDrop: address,
    //   idPlaceDrop: idPlace,
    // });

    
  }

  _selectMap() {
    this.setState({ isDisplayMap: true })
  }

  onFocusSearchPlace(isFocus) {
    this.setState({ isFocus: isFocus });
  }

  selectPlaceMap(address, idPlace) {
    if (this.state.typePlace == 1) {

    }
  }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div className="containerPickLocation">
        <div className="containerSelectPlace">
          <div className="selectPlace" disabled={this.state.isDisplayMap} onClick={false}>
            <div className="containerLeft">

              <i className="zmdi zmdi-pin-account" style={{ height: 'auto', width: 'auto', color: blue500, fontSize: '18px', paddingLeft: '20%' }}></i>
              <div className="lineLeft"></div>
              <i className="zmdi zmdi-pin" style={{ height: 'auto', width: 'auto', color: 'red', fontSize: '18px', paddingLeft: '20%' }}></i>

            </div>

            <InputPlaceTop onSelectPlace={this.onSelectPlacePickUp} focusInputSearch={this.onFocusSearchPlace} hintTextInput="Điểm đón" />
            <InputPlaceBottom onSelectPlace={this.onSelectPlaceDrop} focusInputSearch={this.onFocusSearchPlace} hintTextInput="Điểm đến" />

          </div>

        </div>
        <div className="containerSecond" onClick={this._selectMap.bind(this)}>


        </div>
        <div>{localStorage.getItem('address')}+  {localStorage.getItem('idPlace')} </div>
        {!this.state.isFocus && <div style={{
          position: 'absolute', height: '30px', width: '80%', zIndex: 15, left: '10%', right: '10%', textAlign: 'center', verticalAlign: 'middle', lineHeight: '30px', bottom: '30px', backgroundColor: '#797979',
          borderRadius: '2px', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3)', color: '#fff'
        }}>Hoàn tất</div>}
      </div>


    );
  }
}

export default PickLocation;
