

import { useRef, useEffect, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import { bbox } from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWRkaWVqb2VhbnRvbmlvIiwiYSI6ImNscGhtbmo1cTAzbjcyanRiMG9wcWJuZWIifQ.yG4IQ3nHdGUlgZCBkq9-Jw';

const DualMap = () => {
  const mapContainer1 = useRef<HTMLElement>(null);
  const map1 = useRef<Map>(null);
  const mapContainer2 = useRef<HTMLElement>(null);
  const map2 = useRef<Map>(null);
  const [data, setData] = useState(null);
  const [selectedCounty1, setSelectedCounty1] = useState('');
  const [selectedCounty2, setSelectedCounty2] = useState('');

  useEffect(() => {
    const fetchDatas = async () => {
      const requestBody = [
        {
          geoId: '48',
          id: '6582102b903ab0943c07dbf8',
          regionSetup: {
            peers: 'none',
            segments: 'county',
          },
        },
      ];

      const res = await fetch(
        'https://api.hra-dashtest.com/v3/reports/65820ff1903ab0943c07dbc6/output/boundaries',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody), // Add the body here
        },
      );
      const data = await res.json();
      // console.log(data);
      setData(data?.boundaries[2022]);
    };
    fetchDatas();
  }, []);
  //   console.log(data);

  useEffect(() => {
    if (!map1.current) {
      map1?.current = new mapboxgl.Map({
        container: mapContainer1.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-99.7431, 31.2672], // Coordinates for Map 1
        zoom: 4.75,
      });
    }

    if (!map2.current) {
      map2.current = new mapboxgl.Map({
        container: mapContainer2.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-99.7431, 31.2672], // Coordinates for Map 2
        zoom: 4.75,
      });
    }
  }, []);

  // Add data as a layer to the map
  // This useEffect transforms data into GeoJSON and assigns colors
  useEffect(() => {
    if (!map1.current || !data) return;

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
    const tooltip = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    // console.log(geojsonData);

    // Now we wait for the map to load
    map1.current.on('load', () => {

      if(map1.current && map2.current) {
        if (map1.current.getSource('regionData')) {
          map1.current.removeLayer('regionLayer');
          map1.current.removeSource('regionData');
        }
  
        map1.current.addSource('regionData', {
          type: 'geojson',
          data: geojsonData,
        });
  
        map1.current.addLayer(
          {
            id: 'regionLayer',
            type: 'fill',
            source: 'regionData',
            paint: {
              'fill-color': [
                'step',
                ['get', 'ALAND'],
                '#ffffff',
                2000000000,
                '#C9DCF7',
                5000000000,
                '#96AFD3',
                7500000000,
                '#6481B0',
                10000000000,
                '#32548C',
                15000000000,
                '#002768',
              ],
              'fill-opacity': 0.75,
            },
          },
          'settlement-subdivision-label', // Add layer below labels,
        );
  
        map1.current.on('mousemove', 'regionLayer', (e) => {
          if (e.features.length > 0) {
            const feature = e.features[0];
  
            // Set tooltip contents
            tooltip
              .setLngLat(e.lngLat)
              .setHTML(
                `<strong>${feature.properties.NAME} County </strong><hr />Land Area: ${feature.properties.ALAND}`,
              )
              .addTo(map1.current);
  
            // Highlight the hovered feature
            map1.current.setPaintProperty('regionLayer', 'fill-opacity', [
              'case',
              ['==', ['get', 'NAME'], feature.properties.NAME],
              0.8, // Darken the selected region
              0.6, // Original opacity for others
            ]);
          }
        });
  
        map1.current.on('mouseleave', 'regionLayer', () => {
          tooltip.remove();
          // Reset the layer style on mouse leave
          map1.current.setPaintProperty('regionLayer', 'fill-opacity', 0.6);
        });

      }
      // Then we add the source and layer
     
    });
  }, [data]);
  useEffect(() => {
    if (!map2.current || !data) return;

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
    const tooltip = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    // console.log(geojsonData);

    // Now we wait for the map to load
    map2.current.on('load', () => {
      // Then we add the source and layer
      if (map2.current.getSource('regionData')) {
        map2.current.removeLayer('regionLayer');
        map2.current.removeSource('regionData');
      }

      map2.current.addSource('regionData', {
        type: 'geojson',
        data: geojsonData,
      });

      map2.current.addLayer(
        {
          id: 'regionLayer',
          type: 'fill',
          source: 'regionData',
          paint: {
            'fill-color': [
              'step',
              ['get', 'ALAND'],
              '#ffffff',
              2000000000,
              '#C9DCF7',
              5000000000,
              '#96AFD3',
              7500000000,
              '#6481B0',
              10000000000,
              '#32548C',
              15000000000,
              '#002768',
            ],
            'fill-opacity': 0.75,
          },
        },
        'settlement-subdivision-label', // Add layer below labels,
      );

      map2.current.on('mousemove', 'regionLayer', (e) => {
        if (e.features.length > 0) {
          const feature = e.features[0];

          // Set tooltip contents
          tooltip
            .setLngLat(e.lngLat)
            .setHTML(
              `<strong>${feature.properties.NAME} County </strong><hr />Land Area: ${feature.properties.ALAND}`,
            )
            .addTo(map2.current);

          // Highlight the hovered feature
          map2.current.setPaintProperty('regionLayer', 'fill-opacity', [
            'case',
            ['==', ['get', 'NAME'], feature.properties.NAME],
            0.8, // Darken the selected region
            0.6, // Original opacity for others
          ]);
        }
      });

      map2.current.on('mouseleave', 'regionLayer', () => {
        tooltip.remove();
        // Reset the layer style on mouse leave
        map2.current.setPaintProperty('regionLayer', 'fill-opacity', 0.6);
      });
    });
  }, [data]);

  // Extract county names and their data for the dropdown and zooming
  const counties = data
    ? Object.values(data).map((item) => ({
        name: item.feature.properties.NAME,
        data: item.feature,
      }))
    : [];

  // Handle selection of a county
  const handleCountySelect1 = (event) => {
    const countyName = event.target.value;
    setSelectedCounty1(countyName);

    // Find the selected county's data
    const selectedCountyData1 = counties.find((county) => county.name === countyName);

    if (selectedCountyData1 && map1.current) {
      // Calculate the bounding box of the county
      const bounds = bbox(selectedCountyData1.data.geometry);

      // Zoom to the county
      map1.current.fitBounds(
        [
          [bounds[0], bounds[1]],
          [bounds[2], bounds[3]],
        ],
        {
          padding: 20, // Adjust padding as needed
        },
      );
    }
  };

  // Handle selection of a county
  const handleCountySelect2 = (event) => {
    const countyName = event.target.value;
    setSelectedCounty2(countyName);

    // Find the selected county's data
    const selectedCountyData2 = counties.find((county) => county.name === countyName);

    if (selectedCountyData2 && map1.current) {
      // Calculate the bounding box of the county
      const bounds = bbox(selectedCountyData2.data.geometry);

      // Zoom to the county
      map2.current.fitBounds(
        [
          [bounds[0], bounds[1]],
          [bounds[2], bounds[3]],
        ],
        {
          padding: 20, // Adjust padding as needed
        },
      );
    }
  };

  return (
    <div className='flex w-full h-screen'>
      <select
        value={selectedCounty1}
        onChange={handleCountySelect1}
        className='absolute top-10 left-0 m-5 h-10 z-10 border-radius-10 shadow-xl bg-black text-white'
      >
        <option value=''>Zoom to...</option>
        {counties.map((county, index) => (
          <option key={index} value={county.name}>
            {county.name}
          </option>
        ))}
      </select>
      <div ref={mapContainer1} className='h-full w-1/2 mx-4' />
      <select
        value={selectedCounty2}
        onChange={handleCountySelect2}
        className='absolute top-10 right-0 m-5 h-10 z-10 border-radius-10 shadow-xl bg-black text-white'
      >
        <option value=''>Zoom to...</option>
        {counties.map((county, index) => (
          <option key={index} value={county.name}>
            {county.name}
          </option>
        ))}
      </select>
      <div ref={mapContainer2} className='h-full w-1/2' />
    </div>
  );
};

export default DualMap;
