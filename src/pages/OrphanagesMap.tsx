import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css";

// Configuração do ícone padrão do Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Componente para centralizar o mapa
const FlyMapTo: React.FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center);
  }, [center, map]);

  return null;
};

const OrphanagesMap: React.FC = () => {
  const center: [number, number] = [-1.4373104, -48.468732];

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças esperam a sua visita ;)</p>
        </header>
        <footer>
          <strong>Belém</strong>
          <span>Pará</span>
        </footer>
      </aside>

      <MapContainer
        center={center}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FlyMapTo center={center} />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
