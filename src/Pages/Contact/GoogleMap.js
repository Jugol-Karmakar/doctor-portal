import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./GoogleMap.css";

const GoogleMap = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    fetch("map.json")
      .then((res) => res.json())
      .then((data) => setMaps(data));
  }, []);

  return (
    <div className="my-10">
      <MapContainer
        center={[23.810331, 90.412521]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {maps.map((mup) => (
          <Marker key={mup.id} position={[mup.lat, mup.long]}>
            <Popup position={[mup.lat, mup.long]}>
              <div>
                <h2 className="text-lg text-green-400">{mup.name}</h2>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GoogleMap;
