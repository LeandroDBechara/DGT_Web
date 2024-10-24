import React from "react";
import { useContext } from "react";
import { DocContext } from "../context/DocContext"
import { IconChevronDown } from '@tabler/icons-react';
import.meta.env.BASE_URL

function Documento({ doc }) {
  const { mostrarDoc } = useContext(DocContext)
  return (
    <div className="marco">
      <div className="docu">
      <button className="bDoc" onClick={() => mostrarDoc(doc.id)}><p>{doc.nombre}</p><IconChevronDown className="flecha"/></button>
      </div>
      <div id={doc.id} className="documento">
        <iframe  src={doc.enlace}></iframe>
        </div>
      
    </div>
  );
}

export default Documento;
