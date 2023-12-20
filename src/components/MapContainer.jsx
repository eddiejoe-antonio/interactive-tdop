import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { bbox } from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVqb2VhbnRvbmlvIiwiYSI6ImNscGhtbmo1cTAzbjcyanRiMG9wcWJuZWIifQ.yG4IQ3nHdGUlgZCBkq9-Jw';

const MapContainer = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [boundaryData, setBoundaryData] = useState([]);
    const [choroplethData, setChoroplethData] = useState(null);
    const [selectedCounty, setSelectedCounty] = useState('');

    useEffect(() => {
        const fetchBoundaryData = async () => {
            const requestBody = [
                {
                    "geoId": "48",
                    "id": "6582102b903ab0943c07dbf8"
                }
            ];

            const res = await fetch("https://api.hra-dashtest.com/v3/reports/6509fa55a9a3fc8b698e0cba/output/region-boundaries", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });
            const data = await res.json();
            setBoundaryData(data?.boundaries[2021]);
        };

        const fetchChoroplethData = async () => {
            const requestTwo = [
                {
                    "geoId": "48",
                    "id": "6582102b903ab0943c07dbf8"
                }
            ];
            const res = await fetch("https://api.hra-dashtest.com/v3/reports/65820ff1903ab0943c07dbc6/output/charts", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestTwo)
            });
            const data = await res.json();
            setChoroplethData(data?.charts[0]);
        };

        fetchBoundaryData();
        fetchChoroplethData();
    }, []);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-99.7431, 31.2672], // Coordinates for Austin, Texas
            zoom: 4.75
        });
    }, []);

    useEffect(() => {
        if (!map.current || !boundaryData || !choroplethData) return;
        // console.log(boundaryData);
        // console.log(choroplethData.dataView.data);
        const boundaryDataArray = Object.values(boundaryData);

        const boundaryGeoIds = boundaryDataArray.map(feature => feature.geoId);
        const choroplethGeoIds = choroplethData.dataView.data.map(item => item.geo_id);

        // Initialize an array to store the features
        const features = [];
    
        const combinedData = {};
    
        boundaryDataArray.forEach(boundaryItem => {
            const geoId = boundaryItem.geoId;
    
            // Check if the geoId exists in the choropleth data
            if (choroplethGeoIds.includes(geoId)) {
                // Find the choropleth item that matches the geoId
                const choroplethItem = choroplethData.dataView.data.find(item => item.geo_id === geoId);
    
                features.push({
                    type: 'Feature',
                    geometry: boundaryItem.feature.geometry,
                    properties: {
                        ...choroplethItem,
                    },
                });
            } else {
                console.log(`No matching choropleth data for geoId: ${geoId}`);
            }
        });
    
        const geojsonData = {
            type: 'FeatureCollection',
            features,
        };
        console.log(geojsonData);

        map.current.on('load', () => {
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
                paint: {
                    'fill-color': [
                        'step',
                        ['to-number', ['get', 'households']], // Convert 'households' to a number
                        '#ffffff',
                        20000, '#C9DCF7',
                        50000, '#96AFD3',
                        70000, '#6481B0',
                        100000, '#32548C',
                        120000, '#002768'
                    ],
                    'fill-opacity': 0.75
                }
            }, 'settlement-subdivision-label');
            
        });
    }, [boundaryData, choroplethData]);

    const counties = boundaryData ? Object.values(boundaryData).map(item => ({
        name: item.feature.properties.NAME,
        data: item.feature
    })) : [];

    const handleCountySelect = (event) => {
        const countyName = event.target.value;
        setSelectedCounty(countyName);

        const selectedCountyData = counties.find(county => county.name === countyName);

        if (selectedCountyData && map.current) {
            const bounds = bbox(selectedCountyData.data.geometry);
            map.current.fitBounds([[bounds[0], bounds[1]], [bounds[2], bounds[3]]], {
                padding: 20
            });
        }
    };

    return (
        <div className='relative w-full h-screen'>
            <select value={selectedCounty} onChange={handleCountySelect}
                className="absolute top-10 left-0 m-5 h-10 z-10 border-radius-10 shadow-xl">
                <option value="">Select a county</option>
                {counties.map((county, index) => (
                    <option key={index} value={county.name}>{county.name}</option>
                ))}
            </select>
            <div ref={mapContainer} className="h-full w-full" />
        </div>
    );
}

export default MapContainer;