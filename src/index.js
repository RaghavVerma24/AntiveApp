import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import "./App.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
