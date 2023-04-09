import React from "react";
import * as ReactDOM from "react-dom";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
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
