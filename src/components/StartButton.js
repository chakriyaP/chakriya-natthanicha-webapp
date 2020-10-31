import React from "react";
import "../assets/css/StartButton.css";
import { Switch, Route, Link, Router } from "react-router-dom";


function StartButton() {
  return <div></div>;
}

export function Start({ pathNext }) {
  return (
    <button>เริ่มต้นใช้งาน</button>
    // <Router>
    //   <Link to={pathNext}>
    //     <button>เริ่มต้นใช้งาน</button>
    //   </Link>
    //   <Switch>   
    //     <Route path={pathNext}>
    //       <FirstFormRice />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default StartButton;
