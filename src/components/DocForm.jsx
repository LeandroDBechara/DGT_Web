import React from "react";
import { useState, useContext } from "react";
import { NormativaContext } from "../context/NormativaContext";

function DocForm() {
  const [nombre, setNombre] = useState("");
  const [pdf, setPdf] = useState("");
  const { createNormativa } = useContext(NormativaContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNormativa(nombre, pdf);
    setNombre("");
    setPdf("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setPdf(e.target.value)}
        value={pdf}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default DocForm;
