import React from "react";
function Organigrama() {
  return (
    <div className="container2">
      <div className="container">
        <h1 className="level-1 rectangle">
          Director<p>Dr.Sergio Apestey</p>
        </h1>
        <ol className="level-2-wrapper">
          <li>
            <h2 className="level-2 rectangle">
              Subdirector<p>Dr. Gonzalo de la Vega</p>
            </h2>

            <ol className="level-3-wrapper">
              <li>
                <h3 className="level-3 rectangle">
                  Jefe Dpto. Administración<p>C.P.N. Julio Gómez</p>
                </h3>
              </li>
              <li>
                <h3 className="level-3 rectangle">
                  Jefe Dpto. Jurídico<p>Dr.Daniel Ortega</p>
                </h3>
              </li>
              <li>
                <h3 className="level-3 rectangle">
                  Jefe Dpto. Informática<p>Lic. Andrés Torrado</p>
                </h3>
              </li>
              <li>
                <h3 className="level-3 rectangle">
                  Jefe Dpto. Trafico<p>Hugo Ledda</p>
                </h3>
              </li>
              <li>
                <h3 className="level-3 rectangle">
                  Jefe Dpto. Mesa de E/S<p>Blanca Molina</p>
                </h3>
              </li>
              <li>
                <h3 className="level-3 rectangle">
                  Jefe Dpto. Técnico<p>Jorge Espinoza</p>
                </h3>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Organigrama;
