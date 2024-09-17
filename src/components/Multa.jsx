import React, { useContext } from "react";
import { MultasContext } from "../context/MultasContext";

function Multa() {
  const { multas, consultar } = useContext(MultasContext);
  
  return (
    <div className="container">
      <div className="formulario">
        <h1>Busqueda de infracciones</h1>
        <input
          className="ingre"
          id="dni"
          type="text"
          placeholder="DNI / CUIL"
        />
        <input
          className="ingre"
          id="dominio"
          type="text"
          placeholder="Dominio del vehiculo"
        />
        <button className="boton" onClick={consultar}>
          Consultar Infracciones
        </button>
      </div>
      <div className="tabla">
        <h1>Infracciones encontradas</h1>
        <table className="tabla2">
          <thead>
            <tr>
              <th>Exp.</th>
              <th>Titular</th>
              <th>Resolucion</th>
              <th>Dominio</th>
              <th>Tipo vehiculo</th>
            </tr>
          </thead>
          <tbody>
          {multas.length === 0 && <tr><td colSpan="5" style={{fontWeight: 'bold'}}>No posee infracciones / multas</td></tr>}
            {multas.map((multa) => (
              <tr>
                <th>{multa.expediente}</th>
                <th>{multa.titular}</th>
                <th>{multa.resolucion}</th>
                <th>{multa.dominio}</th>
                <th>{multa.tipov}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Multa;
