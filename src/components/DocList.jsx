import React from "react";
import Documento from "./Documento";
import { useContext } from "react";
import { DocContext } from "../context/DocContext";

function DocList({ tipo }) {
  const { docs } = useContext(DocContext);

  const docu = docs.filter((doc) => doc.tipo == tipo);

  return (
    <div>
      {docu.map((doc) => (
        <Documento key={doc.id} doc={doc} />
      ))}
    </div>
  );
}

export default DocList;
