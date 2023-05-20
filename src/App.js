import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div id="content">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
