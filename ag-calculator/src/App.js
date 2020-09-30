import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import HomePage from "./pages/Home.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/NavigationBar.js";
import Home from "./pages/Home.js";
import CaneCal from "./pages/CaneCal.js";
import History from "./pages/History.js"

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route path="/cane">
          <CaneCal></CaneCal>
        </Route>
        <Route path="/rice">
          <Home />
        </Route>
        <Route path="/history">
        <History></History>
        </Route>
        <Route path="/staff">
          <Home />
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
