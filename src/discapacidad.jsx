import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./components/TopBar";
import ButtonBar from "./components/ButtomBar";
import { MultasContextProvider } from "./context/MultasContext";
import "./Styles/discapacidad.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultasContextProvider>
      <TopBar />
      <main>
      <div className="requisitos">
        <h4>Para la solicitud de pase de discapacidad se debe presentar:</h4>
        <ul>
          <li>Certificado de discapacidad original</li>
          <li>Fotocopia del certificado de discapacidad a <span style={{fontWeight: "bold"}}>COLOR</span></li>
          <li>Fotocopia del DNI del titular (actualizado)</li>
          <li>
            Foto carnet del titular impreso en papel fotográfico (tamaño 4x4)
          </li>
        </ul>
        <p>
          Para la renovación del pase se debe presentar el pase vencido además
          de la documentación antes mencionada.
        </p>
        
        <p className="acla">
          En caso de denuncia por extravío o robo del pase de discapacidad se
          debe presentar, junto con la documentación requerida, constancia
          policial sea o no de la jurisdicción donde se domicilia.
        </p>
        <h4>Para retirar el pase se solicitara:</h4>
        <ul>
          <li>DNI del titular</li>
          <li>Comprobante del pase en tramite</li>
        </ul>
        <p className="acla">
          En caso de no tener el comprobante deberá aguardar al horario de
          cierre de la oficina.
        </p>
      </div>
      <div className="hya">
      <div className="hor">
      <h4>Horarios de atencion</h4>
      <div className="horarios">
          <div>
          <p>Para recepción de documentación:</p>
          <p>Lunes, miércoles y viernes</p>
          <p>8:30hs a 11:30hs</p>
          </div>
        <div>
          <p>Para entrega de pases:</p>
          <p>Martes y jueves</p>
          <p>8:30hs a 12:00hs</p>
        </div>
      </div>
      <p className="acla">*Atención por orden de llegada</p>
      </div>
      <div className="aclaracion">
        <h4>Aclaraciones</h4>
        <p>
          La fotocopia del pase de discapacidad otorgado no es válida para su
          uso. El sello rojo que indica el permiso de acompañante si/no es
          definido por el certificado de discapacidad emitido por la junta de
          discapacidad el pase de discapacidad emitido por AETA no se puede
          renovar en la dirección general de transporte y a que no fue emitido
          por esta oficina.
        </p>
        <p>La renovacion del pase por denuncia de extravío o
          robo puede realizarse una única vez.</p>
      </div>
      </div>
      </main>
      <ButtonBar />
    </MultasContextProvider>
  </React.StrictMode>
);
