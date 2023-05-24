import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppRouter from "./router/AppRouter";
import GlobalStyle from "./style/GlobalStyle";
import Reset from "./style/ResetStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <AppRouter>
      <App />
    </AppRouter>
  </React.StrictMode>
);
