import React from "react";
import "../assets/css/navigationBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationBar() {
  return (
    <div id="nav-bar">
      <div className="logo">
        <h1>
          AG<samp>calculator</samp>
        </h1>
      </div>

      <div className="navigata">
        <Link to="/" className="link">
          <h3 id="home-page">หน้าหลัก</h3>
        </Link>
        <Link to="/cane" className="link">
        <h3>รถตัดอ้อย</h3>
        </Link>
        <Link to="/rice" className="link">
        <h3>เครื่องเกี่ยวนวดข้าว </h3>
        </Link>
        <Link to="/history" className="link">
        <h3>ประวัติ </h3>
        </Link>
        <Link to="/staff" className="link">
        <div className="staff">
          <h3>staff</h3>
        </div>
        </Link>        
      </div>
    </div>
  );
}

export default NavigationBar;
