import React from "react";
import { createContext, useState, useEffect } from "react";

export const LineasContext = createContext();

export function LineasContextProvider(props) {
  const [lineas, setLineas] = useState([]);
  const [search, setSearch] = useState("");
  const [mapa, setMapa] = useState();
  var results = [];
  let busca1 = document.getElementById("busca");
  useEffect(() => {
    getLineas();
  }, []);

  async function getLineas() {
    const res = await fetch("http://localhost:4000/lineas");
    const resJson = await res.json();
    setLineas(resJson);
  }
  function searcher(e) {
    {
      setSearch(e.target.value);

      if (e.target.value === "") {
        busca1.style.borderRadius = "30px 30px 30px 30px";
      } else {
        busca1.style.borderRadius = "30px 30px 4px 4px";
      }
    }
  }

  function maper(e) {
    {
      //var json = JSON.parse(e.target.value);
      setMapa(e.target.value);
      const map = document.getElementById("mapa1");
      map.style.display = "block";
      setSearch("");
      busca1.style.borderRadius = "30px 30px 30px 30px";
    }
  }

  async function crearLinea(e) {
    e.preventDefault();
    const linea = e.target.nombreL.value;
    const mapa = e.target.mapa.value;
    if (linea && mapa) {
      const res = await fetch("http://localhost:4000/agregarlinea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          linea: linea,
          mapa: mapa,
        })
      });

      if (res.ok) {
        getLineas();
        console.log("Elemento insertado exitosamente");
        document.getElementById("nombreL").value = "";
        document.getElementById("mapa").value = "";
      } else {
        console.error("Error al insertar el elemento");
      }
    }
  }

  async function eliminarLinea(e) {
    let id = e.target.value;
    if (e) {
      const res = await fetch(`http://localhost:4000/eliminarlinea/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        getLineas();
        console.log("Elemento eliminado exitosamente");
      } else {
        console.error("Error al eliminar el elemento");
      }
    }
  }

  //metodo de filtrado

  if (search === "") {
  } else {
    results = !search
      ? lineas
      : lineas.filter((dato) =>
          dato.linea.toLowerCase().includes(search.toLocaleLowerCase())
        );
  }

  return (
    <LineasContext.Provider
      value={{
        searcher,
        maper,
        results,
        mapa,
        search,
        crearLinea,
        lineas,
        eliminarLinea,
      }}
    >
      {props.children}
    </LineasContext.Provider>
  );
}
