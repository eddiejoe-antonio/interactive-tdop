import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVqb2VhbnRvbmlvIiwiYSI6ImNscGhtbmo1cTAzbjcyanRiMG9wcWJuZWIifQ.yG4IQ3nHdGUlgZCBkq9-Jw'; // latinonyc

const MapContainer = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    //   const [lng, setLng] = useState(-73.97);
    //   const [lat, setLat] = useState(40.75);
    //   const [zoom, setZoom] = useState(9.25);
    const lng = -98.90;
    const lat = 31.96;
    const zoom = 4.75;
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
        //   style: 'mapbox://styles/eddiejoeantonio/clphn412w00a901p8564y58j4',
          // style: 'mapbox://styles/eddiejoeantonio/clphg94rf009n01p7h48gb82q',
          center: [lng, lat],
          zoom: zoom,
        });
        map.current.on('load', () => {
          map.current.addSource('tristate-latinos', {
            type: 'vector',
            // url: 'mapbox://eddiejoeantonio.a4yr2aom'
            url: 'mapbox://eddiejoeantonio.28hqrftm'
          });
        });
    });

    return ( 
    <div ref={mapContainer} className="map-container h-[700px] w-[700px]" />
    );
}
 
export default MapContainer;