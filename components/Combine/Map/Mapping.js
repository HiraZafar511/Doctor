import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => {
      return (
        <>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
          >
            {props.isMarkerShown && (
              <Marker position={{ lat: -34.397, lng: 150.644 }} />
            )}
          </GoogleMap>
        </>
      );
    })
  );

  const Map = ({findUs}) => {
    return (
      <>
       
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `515px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </>
    );
  };
  
  export default Map;
  