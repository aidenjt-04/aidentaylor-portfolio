import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [35.3735, -119.0205];

function Map() {
    return (
        <MapContainer center={position} zoom={10} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={position}>
                <Popup>
                    This is where I am from!
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;