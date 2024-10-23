import React, { useContext } from "react";
import { LineasContext } from "../context/LineasContext";
import { DocContext } from "../context/DocContext";

/*
//llama a una funcion de nodejs para manejar archivos
const fs = require('fs')

//transforma una varible en string
const newJson = JSON.stringify(variable)
//modifica el archivo json por el contenido de la variable (la variable tiene que ser string)
fs.writeFileSync('archivo.json', newJson)

*/

function Gestion() {
  const { lineas, crearLinea, eliminarLinea } = useContext(LineasContext);
  const { docs, crearDoc, eliminarDoc } = useContext(DocContext);

  function log(e) {
    e.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    if (usuario === "admin" && contraseña === "admin") {
      document.querySelector(".gestion").style.display = "flex";
      document.querySelector(".login").style.display = "none";
    }else{
      document.querySelector(".error").innerHTML = "Usuario o contraseña incorrectos";
      document.querySelector(".error").style.display = "block";
    }
  }
  return (
    <>
      <div className="general">
        <form className="login" onSubmit={log}>
          <img src={`${import.meta.env.BASE_URL}/assets/Logo.svg`} alt="logo" />
          <p>Usuario</p>
          <input id="usuario" type="text" placeholder="Usuario" required />
          <p>Contraceña</p>
          <input id="contraseña" type="password" placeholder="Contraseña" required />
          <p className="error">kljlj</p>
          <button className="btn" type="submit">Iniciar sesion</button>
        </form>
        <div className="gestion">
          <div className="gestion1">
            <form className="gestion2" onSubmit={crearDoc}>
              <h4>Documento</h4>
              <input id="nombreD" type="text" placeholder="Nombre" required />
              <div className="radio">
                <div className="radioD">                <input
                  value={0}
                  type="radio"
                  id="normativa"
                  name="documento"
                  required
                  
                />
                Normativa
                </div>
                <div className="radioN">
                <input
                  value={1}
                  type="radio"
                  id="resolucion"
                  name="documento"
                />
                Resolucion
                </div>
              </div>
              <input id="pdf" type="url" placeholder="URL" required />
              <button className="btn">Añadir documento</button>
            </form>

            <table className="tabla2">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((doc) => (
                  <tr key={doc.id}>
                    <th>{doc.nombre}</th>
                    <th>
                      <button value={doc.id} onClick={eliminarDoc}>
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="gestion1">
            <form className="gestion2" onSubmit={crearLinea}>
              <h4>Linea</h4>
              <input id="nombreL" type="text" placeholder="Nombre" required />
              <input id="mapa" type="url" placeholder="Mapa" required />
              <button className="btn">Añadir linea</button>
            </form>

            <table className="tabla2">
              <thead>
                <tr>
                  <th>Linea</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {lineas.map((lin) => (
                  <tr key={lin.id}>
                    <th>{lin.linea}</th>
                    <th>
                      <button value={lin.id} onClick={eliminarLinea}>
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gestion;
