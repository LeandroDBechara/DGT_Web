import React, { useContext } from "react";
import { LineasContext } from "../context/LineasContext";

function Linea({ linea }) {
  const { maper } = useContext(LineasContext);

  return (
    <button id="lin" className="resultado" value={linea.mapa} key={linea.id} onClick={maper}>
      {linea.linea}
    </button>
  );
}

export default Linea;
