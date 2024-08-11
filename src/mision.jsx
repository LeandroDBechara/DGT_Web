import React from "react";
import ReactDOM from "react-dom/client";
import TopBar from "./components/TopBar";
import ButtomBar from "./components/ButtomBar";
import Organigrama from "./components/Organigrama";
import "./Styles/organigrama.css";
import "./index.css";
import "./Styles/mision.css";

// dar formato : alt +shift + f

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TopBar />
    <main>
      <div className="body">
        <h2>Misión</h2>
        <h5>
          Organizar, regular, controlar y promover el autotransporte público
          interurbano en todo el territorio de la Provincia.
        </h5>
        <h2>Dependencia jerárquica</h2>
        <h5>SECRETARIA DE ESTADO DE TRANSPORTE Y SEGURIDAD VIAL</h5>
        <h2>Funciones del organismo</h2>
        <ul>
          <li>
            Programar y controlar los horarios y recorridos de los distintos
            servicios de autotransporte par un funcionamiento racional de los
            mismos, en concordancia con las necesidades de los usuarios.
          </li>
          <li>
            Asesorar a la Superioridad con respecto a la autorización para el
            funcionamiento de nuevas líneas, conforme a las normas legales y
            reglamentarias vigentes en la materia.
          </li>
          <li>
            Determinar la estructura de costo de los servicios y asesorar a la
            Superioridad, en la fijación del precio de los mismos.
          </li>
          <li>
            Brindar información sobre todo lo relacionado con los servicios de
            autotransporte.
          </li>
          <li>
            Controlar en el ámbito de la Provincia, el cumplimiento de las
            normas vigentes por parte de las empresas nacionales que operan en
            la misma.
          </li>
          <li>
            Participar conjuntamente con el ente nacional de transporte con todo
            aquello que sea de su competencia, conforme a las normas vigentes.
          </li>
          <li>
            Autorizar, controlar y regular la realización de viajes y servicios
            especiales tendiendo a garantizar al pasajero la responsabilidad
            propia de los servicios públicos y evitar la distorsión del sistema.
          </li>
          <li>
            Habilitar las unidades que incorporen al servicio de las empresas,
            previa realización de la inspección técnica correspondiente.
          </li>
          <li>
            Inspeccionar el estado de conservación y mantenimiento de las
            unidades que integral el material rodante de las empresas
            prestatarias de los servicios manteniendo un registro actualizado de
            dichas unidades.
          </li>
          <li>
            Otorgar licencias a los vehículos de transporte de carga y controlar
            el cumplimiento de las normas vigentes para los mismos.
          </li>
          <li>
            Asesorar a la superioridad en el establecimiento de normas legales y
            reglamentarias en las materias de su competencia.
          </li>
          <li>
            Aplicar multas a las empresas prestatarias de los servicios por el
            incumplimiento de las normas vigentes.
          </li>
          <li>
            Coordinar con otros organismos oficiales las acciones de control y
            promoción del autotransporte público.
          </li>
          <li>
            Actuar como agente de percepción del impuesto a los Ingresos Brutos
            que deben tributar las empresas del transporte rural e interurbano
            de pasajeros.
          </li>
          <li>
            Administrar el registro único de conductores y Antecedentes de
            Tránsito (RUCAT) y el Registro Provincial de Taxis y Remises.
          </li>
          <li>
            Entender en el estudio de los accidentes de tránsito y en la
            difusión de las normas de seguridad vial en el ámbito provincial.
          </li>
        </ul>
        <h2>Autoridades</h2>
      </div>
      <Organigrama />
    </main>
    <ButtomBar />
  </React.StrictMode>
);
/*    <div className="organigrama">
      <img src="src/assets/Organigrama.svg" alt="Organigrama" />
    </div>
*/
