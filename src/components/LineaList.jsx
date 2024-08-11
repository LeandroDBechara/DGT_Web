import { useContext } from "react";
import { LineasContext } from "../context/LineasContext";
import Linea from "./Linea";
import { MapContainer, TileLayer, useMap ,Polyline ,Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LineaList() {
  const { searcher, results, mapa, search } = useContext(LineasContext);
  const center = [-26.8208,-65.2123];
//<iframe id="mapa1" className="mapa" src={mapa} alt="mapa"></iframe>
  return (
    <div className="buscador">
      <div className="busca" id="busca">
        <img className="lupa" src="src/assets/lupa.svg" alt="" />
        <input
          className="busc"
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar Línea"
        />
      </div>
      {results.map((linea) => (
        <Linea key={linea.id} linea={linea} />
      ))}
      <MapContainer id="mapa1" className="mapa"  center={center} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Polyline pathOptions={{color: 'red'}} positions={mapa} />
  </MapContainer>
    </div>
  );
}

export default LineaList;
