import React from "react";
import { createContext, useState, useEffect } from "react";
import { multas as data } from "../Jsons/Multas.json";

export const MultasContext = createContext();

export function MultasContextProvider(props) {
  const [multas, setMultas] = useState([]);

  useEffect(() => {
    setMultas(data);
  }, []);

  function consultar() {
    let dni = document.getElementById("dni").value;
    let dominio = document.getElementById("dominio").value;
    setMultas(data.filter(
      (multa) => multa.dni === dni || multa.dominio === dominio.toUpperCase()
    ));
    let tabla = document.getElementsByClassName("tabla")
    tabla[0].style.display = "flex";
    let form = document.getElementsByClassName("formulario")
    form[0].style.display = "none";
  }
  return (
    <MultasContext.Provider
      value={{
        multas,
        consultar,
      }}
    >
      {props.children}
    </MultasContext.Provider>
  );
}
