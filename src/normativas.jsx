import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBar from "./components/TopBar";
import ButtomBar from "./components/ButtomBar";
import DocList from "./components/DocList";
import "./Styles/normativa.css";
import { DocContextProvider } from "./context/DocContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DocContextProvider>
      <TopBar />
      <main>
      <div style={{ margin: "20px" }}>
        <DocList tipo={"normativa"} />
      </div>
      </main>
      <ButtomBar />
    </DocContextProvider>
  </React.StrictMode>
);
