import React, { Fragment, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2tlbWV6YTEiLCJhIjoiY2x1eDJlb2ZkMGoyYTJsa2xvdjNlbWdtOCJ9.sqWPYFQf4FJtw47DYoGI0g';

export const Map = React.memo(({lon= '-84', lat= '33', zoom = 8, events}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);


    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lon, lat],
            zoom: zoom
        });

        map.current.on("load", () => {
            map.current.resize();
        });
    }, [lon, lat, zoom])

    useEffect(() => {
        if (!map.current) return;

        if (marker.current) {
            marker.current.remove();
        }

        map.current.flyTo({
            center: [lon, lat],
            essential: true
        });

        marker.current = new mapboxgl.Marker({color: '#FF0000'}).setLngLat([lon, lat]).addTo(map.current);
    }, [lon, lat]);

    useEffect(() => {
        if (!map.current) return;

        events.forEach((event, index) => {
            new mapboxgl.Marker().setLngLat([event.lon, event.lat]).addTo(map.current);
        })
    }, [events]);

    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    )
})
