import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./components/TopBar";
import ButtonBar from "./components/ButtomBar";
import "./Styles/main.css";
import "@splidejs/react-splide/css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

// dar formato : alt +shift + f

/*<iframe src="https://www.google.com/maps/d/embed?mid=1OX0HEbWcr330MAuM18Ud8OR54mIw26w&ehbc=2E312F" width="640" height="480"></iframe>*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <TopBar />
      <main>
        <Splide
          options={{
            rewind: true,
            width: "100%",
            gap: "1px",
            type: "loop",
            autoplay: true,
            perPage: 2,
            focus: "center",
            arrows: false,
            pagination: false,
          }}
        >
          <SplideSlide>
            <img className="carrusel" src={`${import.meta.env.BASE_URL}/assets/colectivo.png`} />
          </SplideSlide>
          <SplideSlide>
            <img className="carrusel" src={`${import.meta.env.BASE_URL}/assets/auto.png`} alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img className="carrusel" src={`${import.meta.env.BASE_URL}/assets/direc2.jpg`} alt="Image 3" />
          </SplideSlide>
        </Splide>
        <div className="sitios">
          <div className="sitio1">
            <a href="https://www.tucuman.gov.ar/">
              <img src={`${import.meta.env.BASE_URL}/assets/9okjmps1.png`} alt="Gobierno de Tucuman" />
            </a>

            <a href="http://mininteriortucuman.gob.ar/">
              <img src={`${import.meta.env.BASE_URL}/assets/q1mp2h4e.png`} alt="Ministerio" />
            </a>
          </div>
          <div className="sitio2">
            <a href="https://www.argentina.gob.ar/transporte/cnrt">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logo_CNRT.png"
                alt="CNRT"
              />
            </a>
            <a href="https://smt.gob.ar/">
              <img
                src="https://media.licdn.com/dms/image/D4D0BAQGqBTLENcU6MA/company-logo_200_200/0/1713455769855/munismtucuman_logo?e=2147483647&v=beta&t=YvO0OxnY9kGjiXvVW2EFPkXlKBfYbfYsoaeXbUb-Im4"
                alt="Ministerio"
              />
            </a>
          </div>
        </div>
        <h2>TELÉFONOS ÚTILES</h2>
        <div className="telefonos">
          <div>
            <h1>911</h1>
            <p>EMERGENCIA POLICIAL</p>
          </div>
          <div>
            <h1>100</h1>
            <p>BOMBEROS</p>
          </div>
          <div>
            <h1>102</h1>
            <p>AYUDA AL NIÑO</p>
          </div>
          <div>
            <h1>103</h1>
            <p>DEFENSA CIVIL</p>
          </div>
          <div>
            <h1>105</h1>
            <p>EMERGENCIA AMBIENTAL</p>
          </div>
          <div>
            <h1>106</h1>
            <p>EMERGENCIA NÁUTICA</p>
          </div>
          <div>
            <h1>107</h1>
            <p>EMERGENCIA SALUD</p>
          </div>
        </div>
      </main>
      <ButtonBar />
  </React.StrictMode>
);
