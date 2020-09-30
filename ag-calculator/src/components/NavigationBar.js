import React from "react";
import "../assets/css/navigationBar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavigationBar() {
  return (
    <div id="nav-bar">
      <div className="logo">
        <h1>
          AG<samp>calculator</samp>
        </h1>
      </div> 
      <div className="navigata">
        <h3 id="home-page">หน้าหลัก</h3>
        <h3>รถตัดอ้อย</h3>
        <h3>เครื่องเกี่ยวนวดข้าว </h3>
        <h3>ประวัติ </h3>
        <div className="staff">
          <h3>staff</h3>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
