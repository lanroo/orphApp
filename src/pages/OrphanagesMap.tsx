import React from "react";
import mapMarkerImg from "../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2> Escolha um orfanato no Mapa </h2>
          <p>Muitas crianças esperam a sua visita ;)</p>
        </header>

        <footer>
          <strong>Belém</strong>
          <span>Pará</span>
        </footer>
      </aside>
      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
