import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import 'react-reflex/styles.css';

window.addEventListener("beforeunload", () => {
  /*
  closeLocalDatabases().then(() => {
    logMessage("Closed Local Databases");
  });
  */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
