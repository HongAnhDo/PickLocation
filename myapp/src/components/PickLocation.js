import React, { Component } from 'react';
import ic_dimension1 from '../images/ic_dimension1.png';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputPlaceTop from './InputPlaceTop'
import InputPlaceBottom from './InputPlaceBottom'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../styles/PickLocation.css'
import { blue500 } from 'material-ui/styles/colors'
import { reactLocalStorage } from 'reactjs-localstorage';
import VarConf from '../localstorage/VarConf'
import MyMapComponent from '../constant/GoogleMap'


class PickLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressPickUp: "",
      idPlacePickUp: "",
      addressDrop: "",
      idPlaceDrop: "",
      isDisplayMap : false,
      typePlace: 1
    }
    this.onSelectPlacePickUp = this.onSelectPlacePickUp.bind(this);
    this.onSelectPlaceDrop = this.onSelectPlaceDrop.bind(this);

  }

  onSelectPlacePickUp(address, idPlace) {
    this.setState({
      addressPickUp: address,
      idPlacePickUp: idPlace
    });

    reactLocalStorage.set(VarConf.pick_local.addressPickUp, address);
    reactLocalStorage.set(VarConf.pick_local.idPlacePickUp, idPlace);
  }

  onSelectPlaceDrop(address, idPlace) {
    this.setState({
      addressDrop: address,
      idPlaceDrop: idPlace,
    });

    reactLocalStorage.set(VarConf.pick_local.addressDrop, address);
    reactLocalStorage.set(VarConf.pick_local.idPlaceDrop, idPlace);
  }

  _selectMap(){
      this.setState({isDisplayMap: true})
  }

  selectPlaceMap(address, idPlace){
    if(this.state.typePlace == 1){

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
          <div className="selectPlace" disabled = {this.state.isDisplayMap} onClick = {false}>
            <div className="containerLeft">

              <i className="zmdi zmdi-pin-account" style={{ height: 'auto', width: 'auto', color: blue500, fontSize: '18px', paddingLeft: '20%' }}></i>
              <div className="lineLeft"></div>
              <i className="zmdi zmdi-pin" style={{ height: 'auto', width: 'auto', color: 'red', fontSize: '18px', paddingLeft: '20%' }}></i>

            </div>

            {/* <InputPlaceTop onSelectPlace={this.onSelectPlacePickUp} isDisable = {this.state.isDisplayMap} hintTextInput="Điểm đón" />
            <InputPlaceBottom onSelectPlace={this.onSelectPlaceDrop} isDisable = {this.state.isDisplayMap} hintTextInput="Điểm đến" /> */}

            <InputPlaceTop onSelectPlace={this.onSelectPlacePickUp} hintTextInput="Điểm đón" />
            <InputPlaceBottom onSelectPlace={this.onSelectPlaceDrop} hintTextInput="Điểm đến" />

          </div>

        </div>
        <div className="containerSecond" onClick = {this._selectMap.bind(this)}>
          <div className="containerSecondCenter" >
            <i className="zmdi zmdi-pin-drop" style={{ height: '20px', width: 'auto', marginTop: '6px' }}></i>
            <span className="textSelect">Chọn địa điểm trên bản đồ</span>
          </div>

        

        {/* </div>
        {this.state.isDisplayMap && 
        <MyMapComponent
          />
        }

        { this.state.isDisplayMap && <div style ={{position: 'absolute',height: '30px', width:'80%', zIndex: 15,left:'10%',right:'10%', textAlign:'center', verticalAlign:'middle',lineHeight:'30px' ,bottom:'30px', backgroundColor:'#797979', 
        borderRadius:'2px', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3)'}}>Hoàn tất</div>} */}
      </div>
      <div>{reactLocalStorage.get(VarConf.pick_local.idPlaceDrop)}</div>
      </div>
     

    );
  }
}

export default PickLocation;
