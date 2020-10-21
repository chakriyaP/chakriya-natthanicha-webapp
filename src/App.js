import React from "react";
import "./App.css";

import HomePage from "./pages/Home.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/NavigationBar.js";
import Home from "./pages/Home.js";
import CaneCal from "./pages/CaneCal.js";
import History from "./pages/History.js";
import Staff from "./pages/Staff.js";

import FirstFormCane from "./pages/FirstFormCane.js";
import FirstFormRice from "./pages/FirstFormRice.js";
import SecondFormRice from "./pages/SecondFormRice.js";
import ThirdFormRice from "./pages/ThirdFormRice.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/cane" component={CaneCal} />
        <Route path="/rice" component={FirstFormRice} />
        <Route path="/rice2" component={SecondFormRice}/>
        <Route path="/rice3" component={ThirdFormRice}/>
        <Route path="/process" component={Staff}/>

        <Route path="/history" component={History} />
        <Route path="/staff" component={Staff} />
      
        <Route path="/" component={Home} />
      
      </Switch>

      {/* <FirstFormCane/> */}
      {/* <FirstFormRice /> */}
      {/* <SecondFormRice/> */}
      {/* <ThirdFormRice/> */}
    </Router>
  );
}

export default App;
