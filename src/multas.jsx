import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./components/TopBar";
import ButtonBar from "./components/ButtomBar";
import Multa from "./components/Multa";
import { MultasContextProvider } from "./context/MultasContext";
import "./Styles/multas.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultasContextProvider>
      <TopBar />
      <main>
      <Multa />
      </main>
      <ButtonBar />
    </MultasContextProvider>
  </React.StrictMode>
);
