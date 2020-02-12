import React, { useState } from 'react';
import './App.css';
import GeoService from './service/geo';
import config from './config.json';

const Geo = new GeoService();

function App() {
  const londonGeoInfo = {
      latitude: 51.50722,
      longitude: -0.12750
    }
  const [appLong, setAppLong] = useState(0);
  const [appLat, setAppLat] = useState(0);
  const [appDate, setAppDate] = useState(0);

  var options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
  };

  var success = (pos) => {
    var coords = pos.coords;
    var coordsText = 'Your current position is: ' +
      '\nLatitude : ' + coords.latitude +
      '\nLongitude : ' + coords.longitude +
      '\nAccuracy is more or less : ' + coords.accuracy + ' meters.' +
      '\nLocation detected : ' + new Date(pos.timestamp)
      ;
      console.log(coordsText);
      setAppLat(coords.latitude);
      setAppLong(coords.longitude);
  };

  var error = (err) => {
    console.warn('ERROR(' + err.code + '): ' + err.mesage);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div className="App">
    
        <h1>React Map App v0.1</h1>
        <section>
          <h2>Your current position is: </h2>
          <p>Latitude: {appLat}</p>
          <p>Longitude: {appLong}</p>

          <br/>
          <h2>Debug Information</h2>
          <p>DNS lookup: ?? ms</p>
          <p>Connection lookup: ?? ms </p>
          <p>Page load: ?? ms</p>
          <p>Fetch time: ?? ms </p>
      </section>

    </div>
  );
}

export default App;
