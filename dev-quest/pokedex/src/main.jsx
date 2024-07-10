import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Styles from "./layout/Styles.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Styles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
