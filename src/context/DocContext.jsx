import React from "react";
import { createContext, useState, useEffect } from "react";
import { documentos } from "../Jsons/Documentos.json";

export const DocContext = createContext();

export function DocContextProvider(props) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    setDocs(documentos);
  }, []);

  function crearDoc() {
    let nombre = document.getElementById("nombreD").value;
    let pdf = document.getElementById("pdf").value;
    let val = document.getElementsByName("documento");
    let tipo;
    for (const va of val) {
      if (va.checked) {
        tipo = va.value;
      }
    }

    
    setDocs([
      ...docs,
      {
        id: docs.length+1,
        nombre,
        pdf,
        tipo
      }
    ]);
  }

  function mostrarDoc(id) {
    var doc = document.getElementById(id);
    if (doc.style.display === "block") {
      doc.style.display = "none";
    } else {
      doc.style.display = "block";
    }
  }
  function eliminarDoc(e){
    let id = e.target.value;
    setDocs(documentos.filter((doc) => doc.id !== id));
  }

  return (
    <DocContext.Provider
      value={{
        docs,
        crearDoc,
        mostrarDoc,
        eliminarDoc,
      }}
    >
      {props.children}
    </DocContext.Provider>
  );
}
