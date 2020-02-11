import React, { useEffect } from 'react';
import './App.css';
import GeoService from './service/geo';
import config from './config.json';

const Geo = new GeoService();

function App() {
  const londonGeoInfo = {
      latitude: 51.50722,
      longitude: -0.12750
    }

 

  return (
    <div className="App">
    
        <h1>React Map App v0.1</h1>
        <section>
        <h2>Your coordinates</h2>
        <p>Longitude: {londonGeoInfo.longitude}</p>
        <p>Latitude: {londonGeoInfo.latitude}</p>
        <br></br>
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
