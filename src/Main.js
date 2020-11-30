import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Chart from "./components/Chart";
import Nav from "./components/Nav";

function Main() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/chart" component={Chart} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
