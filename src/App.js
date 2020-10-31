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
import SecondFormCane from "./pages/SecondFormCane.js";
import ThirdFormCane from "./pages/ThirdFormCane.js";

import FirstformRice from "./pages/FirstformRice.js";
import SecondFormRice from "./pages/SecondFormRice.js";
import ThirdFormRice from "./pages/ThirdFormRice.js";
import ProcessRice from "./pages/ProcessRice.js"

function App() {
  return (
    <Router>
      {/* <ScrollToTop> */}
      <Navbar />
      <Switch>
        <Route path="/chakriya-natthanicha-webapp/cane" component={FirstFormCane} />
        <Route path="/chakriya-natthanicha-webapp/cane2" component={SecondFormCane} />
        <Route path="/chakriya-natthanicha-webapp/cane3" component={ThirdFormCane} />

        <Route path="/chakriya-natthanicha-webapp/rice" component={FirstformRice} />
        <Route path="/chakriya-natthanicha-webapp/rice2" component={SecondFormRice}/>
        <Route path="/chakriya-natthanicha-webapp/rice3" component={ThirdFormRice}/>
        <Route path="/chakriya-natthanicha-webapp/riceProcess" component={ProcessRice}/>

        <Route path="/chakriya-natthanicha-webapp/history" component={History} />
        <Route path="/chakriya-natthanicha-webapp/staff" component={Staff} />
      
        <Route path="/chakriya-natthanicha-webapp/home" component={Home} />
      
      </Switch>
      {/* </ScrollToTop> */}
     

      {/* <FirstFormCane/> */}
      {/* <FirstFormRice /> */}
      {/* <SecondFormRice/> */}
      {/* <ThirdFormRice/> */}
    </Router>
  );
}

export default App;
