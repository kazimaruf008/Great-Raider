import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { DirectionsService } from '@react-google-maps/api';
// import { DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const location = {
  lat: 23.707310,
  lng: 90.415480
};
// const onLoad = marker => {
//     console.log('marker: ', marker)
//   }
function MyComponent() {
    const [directionResponse, setDirectionResponse] = useState(null)
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAwiw3jNKWOrYTAsDG0fHxY1VRFwYt7-7E"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        
        <DirectionsService

                  options={{ 
                    destination: 'anglaDesh',
                    origin: 'India',
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={res => {
                      if (res !== null) {
                          setDirectionResponse(res)
                      }
                  }}
                />
                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                  />
                }
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)