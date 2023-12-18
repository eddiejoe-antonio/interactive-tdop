import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVqb2VhbnRvbmlvIiwiYSI6ImNscGhtbmo1cTAzbjcyanRiMG9wcWJuZWIifQ.yG4IQ3nHdGUlgZCBkq9-Jw';


const MapContainer = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://data.austintexas.gov/resource/xaxa-886r.json');
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-97.7431, 30.2672], // Coordinates for Austin, Texas
            zoom: 10,
        });
    }, []);

    useEffect(() => {
        if (!map.current || !data) return;

        const geojsonData = {
            type: 'FeatureCollection',
            features: data.map(item => ({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [parseFloat(item.location_1.longitude), parseFloat(item.location_1.latitude)]
                },
                properties: {
                    // include other properties you might need
                    poolName: item.pool_name,
                    phone: item.phone
                }
            }))
        };
    
        map.current.on('load', () => {
            map.current.addSource('austin-data', {
                type: 'geojson',
                data: geojsonData
            });
    
            map.current.addLayer({
                id: 'austin-layer',
                type: 'circle', // Change as per your dataset
                source: 'austin-data',
                paint: {
                    'circle-opacity': 0.9,
                    'circle-color': '#0000ff',
                    'circle-stroke-color': '#fff',
                    "circle-stroke-width": 1
                }
            });
        });
    }, [data]);

    return (
        <div ref={mapContainer} className="map-container h-screen w-full" />
    );
}
 
export default MapContainer;
