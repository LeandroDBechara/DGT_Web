import React from "react";
import { createContext, useState, useEffect } from "react";


export const MultasContext = createContext();

export function MultasContextProvider(props) {
  const [multas, setMultas] = useState([]);

  async function getMultas(dni, dominio) {
    const url = new URL("http://localhost:4000/multas");
    url.searchParams.append('dni', dni); // Agrega el parámetro DNI
    url.searchParams.append('dominio', dominio); // Agrega el parámetro Dominio
    const res = await fetch(url);
    const resJson = await res.json();
    setMultas(resJson);
  }

  function consultar(e) {
    e.preventDefault();
    const dni = e.target.dni.value;
    const dominio = e.target.dominio.value;
    const formato1 = /^[A-Z]{2}[0-9]{3}[A-Z]{2}$/; // Dos letras, tres números, dos letras
    const formato2 = /^[A-Z]{3}[0-9]{3}$/; // Tres números, tres letras

    if (!dni && !dominio ) {
      const error = document.getElementsByClassName("error");
      error[0].style.display = "flex";
      error[0].innerHTML = "Debe ingresar un DNI o Dominio";
      return;
    }else{
      if (dominio && !(formato1.test(dominio) || formato2.test(dominio))){
        const error = document.getElementsByClassName("error");
        error[0].style.display = "flex";
        error[0].innerHTML = "Formato del dominio incorrecto, ejemplos de formatos admitidos: ABC123 , AB123CD";
        return;
      }
      getMultas(dni, dominio)
      let tabla = document.getElementsByClassName("tabla")
      tabla[0].style.display = "flex";
      let form = document.getElementsByClassName("formulario")
      form[0].style.display = "none";
    }
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
