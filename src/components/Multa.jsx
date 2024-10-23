import React, { useContext } from "react";
import { MultasContext } from "../context/MultasContext";

function Multa() {
  const { multas, consultar } = useContext(MultasContext);
  
  return (
    <div className="container">
      <form className="formulario" onSubmit={consultar}>
        <h1>Busqueda de infracciones</h1>
        <input
          className="ingre"
          id="dni"
          type="number"
          placeholder="DNI / CUIL (sin puntos, ni barras)"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
            if (e.target.value.length > 11) {
              e.target.value = e.target.value.slice(0, 11);
            }
          }}
        />
        <div>
        <img src={`${import.meta.env.BASE_URL}/assets/pregunta.svg`} alt="" title="El dominio debe tener el formato: 3 letras y 3 numero o 2 letras, 3 numeros y 2 letras" />
        <input
          className="ingre"
          id="dominio"
          type="text"
          placeholder="Dominio del vehiculo"
          onInput={(e)=>{
            e.target.value = e.target.value.toUpperCase();
            if (e.target.value.length > 7) {
              e.target.value = e.target.value.slice(0, 7);
            }
          }}
        />
        </div>
        <p className="error"></p>
        <button className="boton">
          Consultar Infracciones
        </button>
      </form>
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
