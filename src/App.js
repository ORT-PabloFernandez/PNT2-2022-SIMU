import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Peliculas from "./pages/PeliculasP";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>SIMULARCRO PARCIAL PNT2</h1>
            <h2>FRANCISCO RODRIGO</h2>
          </div>
        </Route>
        <Route path="/peliculas" exact>
          <Peliculas pageSize={10} page={1} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
