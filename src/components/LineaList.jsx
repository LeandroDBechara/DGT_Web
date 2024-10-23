import { useContext } from "react";
import { LineasContext } from "../context/LineasContext";
import Linea from "./Linea";

function LineaList() {
  const { searcher, results, mapa, search } = useContext(LineasContext);

  return (
    <div className="buscador">
      <div className="busca" id="busca">
        <img className="lupa" src={`${import.meta.env.BASE_URL}/assets/lupa.svg`} alt="" />
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
      <iframe id="mapa1" className="mapa" src={mapa} alt="mapa"></iframe>
    </div>
  );
}

export default LineaList;
