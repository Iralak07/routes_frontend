import './App.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import RoutingMachine from './components/routingMachine';
import LocationMarker from './components/locationMarker';
import Formulario from './components/formClient';

function App() {

  const position = [-27.330083, -55.863297]

  return (
    <>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <LocationMarker />
        {/* <RoutingMachine /> */}
      </MapContainer>
      <div>
        <Formulario />
      </div>
    </>
  )
}

export default App;
