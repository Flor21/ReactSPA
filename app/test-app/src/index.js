import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import Flowers from "./components/main/Flowers";
import Contact from "./components/main/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/flowers" exact={true} component={Flowers} />
      <Route path="/contact" exact={true} component={Contact} />
    </Switch>
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);
