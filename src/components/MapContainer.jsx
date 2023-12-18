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
                const response = await fetch('https://data.texas.gov/resource/sw7f-2kkd.json');
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
            zoom: 5,
        });
    }, []);

    useEffect(() => {
        if (!map.current || !data) return;

        const geojsonData = {
            type: 'FeatureCollection',
            features: data.map(item => ({
                type: 'Feature',
                geometry: {
                    type: 'MultiPolygon',
                    coordinates: item.the_geom.coordinates
                },
            }))
        };
        console.log(geojsonData);
    
        map.current.on('load', () => {
            map.current.addSource('austin-data', {
                type: 'geojson',
                data: geojsonData
            });
    
            map.current.addLayer({
                id: 'austin-layer',
                type: 'fill', // Change as per your dataset
                source: 'austin-data',
                paint: {
                    'fill-color': '#666',
                    'fill-outline-color': '#fff',
                    'fill-opacity': 0.5,
                }
            },
            'settlement-subdivision-label', // Add layer below labels,
            );
            
        });
    }, [data]);

    return (
        <div ref={mapContainer} className="map-container h-screen w-full" />
    );
}
 
export default MapContainer;
