import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstFormRice from "./pages/FirstFormRice.js";
import SecondFormRice from "./pages/SecondFormRice.js";
import ThirdFormRice from "./pages/ThirdFormRice.js";

function test() {
    return (
       <Router>
          <Switch>
            <Route path="/rice2" component={SecondFormRice}/>
        </Switch> 
       </Router>
    )
}

export default test
