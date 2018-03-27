import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GOOGLE_JSON } from "./GoogleJson"
import ReactDOM from 'react-dom';
import ic_person from '../images/ic_person.png'
import '../styles/GoogleMap.css'
/*global google*/
const heightView = window.innerHeight - 135;

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ position: 'relative', height: heightView + 'px', textAlign: 'center', zIndex: '1' }} />,
    mapElement: <div style={{ height: heightView + 'px' }} />,

  }),
  lifecycle({

    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 21.017548, lng: 105.8492746
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
          this.setState({
            center: refs.map.getCenter(),

          })
        },

      })

    },
    
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <div className = "map" >
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 21.017548, lng: 105.8492746 }}
      defaultOptions={{ styles: GOOGLE_JSON }}
      ref={props.onMapMounted}
      center={props.center}>
    </GoogleMap>

  </div>

)

export default MyMapComponent;