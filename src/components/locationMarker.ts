import { useState } from 'react'
import { useMap, useMapEvent } from 'react-leaflet';
import L from 'leaflet';



const LocationMarker = () => {
    const [position, setPosition] = useState([]);
    const map = useMap();

    useMapEvent('click', (e:L.LeafletMouseEvent) => {
        setPosition(e.latlng);
        L.marker(e.latlng).addTo(map);
    });
    console.log(position)
    return null;
}


export default LocationMarker;