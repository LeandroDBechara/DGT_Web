import React from "react";
import { createContext, useState, useEffect } from "react";
import { documentos } from "../Jsons/Documentos.json";

export const DocContext = createContext();

export function DocContextProvider(props) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    getDocumentos();
  }, []);

  async function getDocumentos() {
    const res = await fetch("http://localhost:4000/documentos");
    const resJson = await res.json();
    setDocs(resJson);
  }

  async function crearDoc() {
    let nombre = document.getElementById("nombreD").value;
    let val = document.getElementsByName("documento");
    let enlace = document.getElementById("pdf").value;
    let tipo;
    val.forEach(async (va) => {
      if (va.checked) {
        tipo = va.value;
        if (nombre && enlace && tipo) {
          const res = await fetch("http://localhost:4000/agregardoc", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nombre: nombre,
              enlace: enlace,
              tipo: tipo,
            }),
          });

          if (res.ok) {
            getDocumentos();
            console.log("Elemento insertado exitosamente");
            document.getElementById("nombreD").value = "";
            document.getElementsByName("documento").forEach((radio) => {
              radio.checked = false;
            });
            document.getElementById("pdf").value = "";
          } else {
            console.error("Error al insertar el elemento");
          }
        }
      }
    });
  }

  function mostrarDoc(id) {
    var doc = document.getElementById(id);
    if (doc.style.display === "block") {
      doc.style.display = "none";
    } else {
      doc.style.display = "block";
    }
  }
  async function eliminarDoc(e) {
    let id = e.target.value;
    if (e) {
      const res = await fetch(`http://localhost:4000/eliminardoc/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        getDocumentos();
        console.log("Elemento eliminado exitosamente");
      } else {
        console.error("Error al eliminar el elemento");
      }
    }
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
