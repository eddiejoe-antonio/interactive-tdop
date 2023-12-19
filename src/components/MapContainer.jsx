import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { bbox } from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVqb2VhbnRvbmlvIiwiYSI6ImNscGhtbmo1cTAzbjcyanRiMG9wcWJuZWIifQ.yG4IQ3nHdGUlgZCBkq9-Jw';


const MapContainer = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [data, setData] = useState(null);
    const [selectedCounty, setSelectedCounty] = useState('');
    
    useEffect(() => {
        const fetchDatas = async () => {
          const requestBody = [
              {
                  "geoId": "48",
                  "id": "654d5449886c8eda0686e97c"
              }
          ]
  
          const res = await fetch("https://api.hra-dashtest.com/v3/reports/6509fa55a9a3fc8b698e0cba/output/region-boundaries", {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(requestBody) // Add the body here
            })
          const data = await res.json();
          // console.log(data.charts[0].dataView.data[0]);
          setData(data?.boundaries[2021]);
        };
        fetchDatas();
      }, []);
    //   console.log(data);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-99.7431, 31.2672], // Coordinates for Austin, Texas
            zoom: 4.75,
            minZoom: 4
        });
    }, []);

    // Add data as a layer to the map
// This useEffect transforms data into GeoJSON and assigns colors
useEffect(() => {
    if (!map.current || !data) return;

    // Transform the data into GeoJSON and assign a color based on ALAND
    const geojsonData = {
        type: 'FeatureCollection',
        features: Object.values(data).map(({ feature }) => {
            return {
                type: 'Feature',
                geometry: feature.geometry,
                properties: {
                    ...feature.properties,
                },
            };
        }),
    };
    // console.log(geojsonData);

    // Now we wait for the map to load
    map.current.on('load', () => {
        // Then we add the source and layer
        if (map.current.getSource('regionData')) {
            map.current.removeLayer('regionLayer');
            map.current.removeSource('regionData');
        }

        map.current.addSource('regionData', {
            type: 'geojson',
            data: geojsonData
        });

        map.current.addLayer({
            id: 'regionLayer',
            type: 'fill',
            source: 'regionData',
            'paint': {
                'fill-color': ['step', ['get', 'ALAND'],
                    '#ffffff',
                    2000000000, '#ccedf5',
                    5000000000, '#99daea',
                    7500000000, '#66c7e0',
                    10000000000, '#33b5d5',
                    15000000000, '#00a2ca'],
                'fill-opacity': 0.6,
                'fill-outline-color': 'white'
            }
        });
    });
}, [data]); 

    // Extract county names and their data for the dropdown and zooming
    const counties = data ? Object.values(data).map(item => ({
        name: item.feature.properties.NAME,
        data: item.feature
    })) : [];

    // Handle selection of a county
    const handleCountySelect = (event) => {
        const countyName = event.target.value;
        setSelectedCounty(countyName);

        // Find the selected county's data
        const selectedCountyData = counties.find(county => county.name === countyName);

        if (selectedCountyData && map.current) {
            // Calculate the bounding box of the county
            const bounds = bbox(selectedCountyData.data.geometry);

            // Zoom to the county
            map.current.fitBounds([[bounds[0], bounds[1]], [bounds[2], bounds[3]]], {
                padding: 20 // Adjust padding as needed
            });
        }
    };

    return (
        <div className="relative h-screen w-full">
            <select value={selectedCounty} onChange={handleCountySelect} 
                    className="absolute top-10 left-0 m-5 h-10 z-10 border-radius-10 shadow-xl">
                <option value="">Select a county</option>
                {counties.map((county, index) => (
                    <option key={index} value={county.name}>{county.name}</option>
                ))}
            </select>
            <div ref={mapContainer} className="map-container h-full w-full" />
        </div>
    );
}
 
export default MapContainer;
