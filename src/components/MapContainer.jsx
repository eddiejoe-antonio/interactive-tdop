import React, { useRef, useEffect, useState, useMemo } from 'react';
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
    const [geoJsonFeatures, setGeoJsonFeatures] = useState([]);

    useEffect(() => {
        const fetchBoundaryData = async () => {
            const requestBody = [
                {
                    "geoId": "48",
                    "id": "6582102b903ab0943c07dbf8",
                    "regionSetup":{
                        "peers": "none",
                        "segments": "county"
                    }
                }
            ];

            const res = await fetch("https://api.hra-dashtest.com/v3/reports/65820ff1903ab0943c07dbc6/output/boundaries", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });
            const data = await res.json();
            console.log(data);
            setBoundaryData(data?.boundaries[2022]);
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
    console.log(boundaryData);

    const aggregatedChoroplethData = useMemo(() => {
        return choroplethData ? choroplethData.data.reduce((acc, item) => {
            const geoId = item.geo_id;

            if (!acc[geoId]) {
                acc[geoId] = {};
            }

            Object.keys(item).forEach(key => {
                if (key !== 'geo_id') {
                    acc[geoId][`${key}_${item.internet_access_type}`] = item[key];
                }
            });

            return acc;
        }, {}) : {};
    }, [choroplethData]);

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
        const boundaryDataArray = Object.values(boundaryData);

        // Initialize an array to store the features
        const features = [];
        boundaryDataArray.forEach(boundaryItem => {
            const geoId = boundaryItem.geoId;

            if (aggregatedChoroplethData[geoId]) {
                features.push({
                    type: 'Feature',
                    geometry: boundaryItem.feature.geometry,
                    properties: {
                        ...aggregatedChoroplethData[geoId],
                        ...boundaryItem.feature.properties,
                    },
                });
            } else {
                // console.log(`No matching choropleth data for geoId: ${geoId}`);
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
                        ['to-number', ['get', 'households_no_internet']], // Convert 'households' to a number
                        '#ffffff',
                        2000, '#C9DCF7',
                        5000, '#96AFD3',
                        7000, '#6481B0',
                        10000, '#32548C',
                        12000, '#002768'
                    ],
                    'fill-opacity': 0.75
                }
            }, 'settlement-subdivision-label');

            const tooltip = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            map.current.on('mousemove', 'regionLayer', (e) => {
                if (e.features.length > 0) {
                    const feature = e.features[0];
    
                    // Set tooltip contents
                    tooltip.setLngLat(e.lngLat)
                           .setHTML(`      
                           <strong class="font-sans uppercase">${feature.properties.NAME} County</strong>
                           <hr class="my-2"/>
                           Households with No Internet Subscription: 
                           <span class="font-bold">${feature.properties.households_no_internet}</span>
                           `)
                           .addTo(map.current);
    
                    // Highlight the hovered feature
                    map.current.setPaintProperty('regionLayer', 'fill-opacity', [
                        'case',
                        ['==', ['get', 'households_no_internet'], feature.properties.households_no_internet],
                        0.8, // Darken the selected region
                        0.6  // Original opacity for others
                    ]);
                }
            });
    
            map.current.on('mouseleave', 'regionLayer', () => {
                tooltip.remove();
                // Reset the layer style on mouse leave
                map.current.setPaintProperty('regionLayer', 'fill-opacity', 0.6);
            });
            
        });
        if (geoJsonFeatures.length === 0 && boundaryData && choroplethData) {
            const features = Object.values(boundaryData).reduce((acc, boundaryItem) => {
                const geoId = boundaryItem.geoId;
                if (aggregatedChoroplethData[geoId]) {
                    acc.push({
                        type: 'Feature',
                        geometry: boundaryItem.feature.geometry,
                        properties: {
                            ...aggregatedChoroplethData[geoId],
                            ...boundaryItem.feature.properties,
                        },
                    });
                }
                return acc;
            }, []);

            setGeoJsonFeatures(features);
        }
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
                className="absolute top-10 left-0 m-5 h-10 z-10 shadow-xl bg-black text-white">
                <option value="" className='bg-black'>Zoom to...</option>
                {counties.map((county, index) => (
                    <option key={index} value={county.name} className='bg-black'>{county.name}</option>
                ))}
            </select>
            <div ref={mapContainer} className="h-full w-full" />
        </div>
    );
}

export default MapContainer;