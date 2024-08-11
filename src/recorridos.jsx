import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./components/TopBar";
import ButtomBar from "./components/ButtomBar";
import { LineasContextProvider } from "./context/LineasContext";
import "./Styles/recorridos.css";
import LineaList from "./components/LineaList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LineasContextProvider>
      <TopBar />
      <main>
      <LineaList />
      </main>
      <ButtomBar />
    </LineasContextProvider>
  </React.StrictMode>
);
