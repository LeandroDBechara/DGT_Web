import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./components/TopBar";
import ButtonBar from "./components/ButtomBar";
import Gestion from "./components/Gestion";
import{DocContextProvider} from "./context/DocContext"
import{LineasContextProvider} from "./context/LineasContext"
import "./Styles/admin.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DocContextProvider>
      <LineasContextProvider>
      <TopBar />
      <main>
      <Gestion />
      </main>
      <ButtonBar />
      </LineasContextProvider>
      </DocContextProvider>
  </React.StrictMode>
);
