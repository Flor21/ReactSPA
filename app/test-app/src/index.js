import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import Flowers from "./components/main/Flowers";
import Contact from "./components/main/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/flowers" exact={true} component={Flowers} />
      <Route path="/contact" exact={true} component={Contact} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
