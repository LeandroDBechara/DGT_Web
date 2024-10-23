import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Styles/mision.css";
import TopBar from "./components/TopBar";
import ButtomBar from "./components/ButtomBar";
import "./Styles/zafra.css"


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>    
        <TopBar />
        <main>
        <div className="zafra">
        <div className="contenido">
            <h3>Licencia para transporte de caña de azucar</h3>
            <h4>Requisitos</h4>
            <ul>
                <li>Solicitud en formulario original, firmado, sellado y ratificado ante fuincionario competente y fotocopia de DNI suscriptor solicitud.</li>
                <li>Titulo de dominio del rodante o constacia que acredite la habilitacion de su uso.</li> 
                <li>Recibo de pago de contratacion de cobertura de seguro de riesgo sobre terceros.</li>
                <li>Licencia habilitante del conductor segun el tipo de vehiculo que conduzca.</li> 
                <li>Seguro laboral otorgado por la Aseguradora de Riesgo de Trabajo (A.R.T.).</li>
                <li>Convenio de contratacion con el establecimiento vinculado</li> 
                <li>certificado de libre deuda expedido por la Dirección General de Transporte.</li>
                <li>Inspección técnica del vehículo y acoplados.</li>  
            </ul>
            <p>Es responsabilidad pura y exclusiva del presentante mantener vigente durante el período de zafra la documentación presentada.</p>
        </div>
        <div><img src="/assets/zafra4.png" alt="" /></div>
        </div>
        </main>
        <ButtomBar />
    </React.StrictMode>
  );