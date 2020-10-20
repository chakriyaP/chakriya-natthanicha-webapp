import React from "react";
import "./App.css";

import HomePage from "./pages/Home.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/NavigationBar.js";
import Home from "./pages/Home.js";
import CaneCal from "./pages/CaneCal.js";
import History from "./pages/History.js";
import ProcessRice from "./pages/ProcessRice.js";
import FirstFormCane from "./pages/FirstFormCane.js"
import FirstFormRice from "./pages/FirstFormRice.js"
import SecondFormRice from "./pages/SecondFormRice.js"
import ThirdFormRice from "./pages/ThirdFormRice.js"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/cane">
          <CaneCal></CaneCal>
        </Route>
        <Route path="/rice">
          {/* <FirstformRice/> */}
          <SecondFormRice/>
        </Route>
        <Route path="/history">
        <History></History>
        </Route>
        <Route path="/staff"> 
          <Home />
        </Route>
        <Route path="/">
          {/* <Home></Home> */}
          <ProcessRice/>
          {/* <FirstFormCane/> */}
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
