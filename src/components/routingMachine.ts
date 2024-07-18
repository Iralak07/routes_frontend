import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';

const RoutingMachine = () => {
  const map = useMap();
  const routingControlRef = useRef(null);
  const [waypoints, setWaypoints] = useState([
    L.latLng(-27.330083, -55.863297),
    L.latLng(-27.333018, -55.841925),
    L.latLng(-27.330084, -55.863397),
  ]);

  useEffect(() => {
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }
    
    routingControlRef.current = L.Routing.control({
      waypoints: waypoints,
      
      routeWhileDragging: true,
      showAlternatives: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControlRef.current);
    };
  }, [map]);

  return null;
};

export default RoutingMachine;
