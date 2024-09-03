// AIzaSyBkuoLFcMXZ2tLqSWZO4yBAmayADQXkRaM
import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '600px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkuoLFcMXZ2tLqSWZO4yBAmayADQXkRaM", // Replace with your API key
  });

  const [map, setMap] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [response, setResponse] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const calculateRoute = () => {
    if (origin && destination) {
      const service = new window.google.maps.DirectionsService();
      service.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
            setDistance(result.routes[0].legs[0].distance.text);
            setDuration(result.routes[0].legs[0].duration.text);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    }
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
          />
        )}
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.3)' }}>
          <div>Distance: {distance}</div>
          <div>Duration: {duration}</div>
        </div>
      </GoogleMap>
      
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={calculateRoute} style={{ marginLeft: '10px' }}>
          Calculate Route
        </button>
      </div>
    </div>
  ) : <></>;
}

export default React.memo(MyComponent);
