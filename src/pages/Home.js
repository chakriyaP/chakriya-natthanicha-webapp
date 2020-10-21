import React from "react";
import Nav from "../components/NavigationBar.js";
import "../assets/css/HomePage.css";
import { Start } from "../components/StartButton.js";

function Home() {
  return (
    <div className="homePage">
      <div className="headder">
        <div>
          <h1>
            โปรแกรม<samp>ประมาณการความคุ้มค่า</samp>
            <br></br>การใช้งานเครื่องจักรกลทางการเกษตร
          </h1>
        </div>
      </div>

      <div className="select">
        <div className="crad-select">
          <img
            src={
              "https://assets.cnhindustrial.com/caseih/APAC/APACASSETS/Products/Harvesters/Sugar-Cane-Harvester-Austoft-8010/036-case_case-ih-coloured_3533_1056.jpg"
            }
            alt="รถตัดอ้อย"
            width="500"
            height="200"
          />
          <h2>
            โปรแกรมประมาณการความคุ้มค่า<br></br>ในการใช้งาน
            <samp>รถตัดอ้อย</samp>
          </h2>
          <Start/>
        </div>

        <div className="crad-select">
          <img
            src={
              "https://images.unsplash.com/photo-1565647952915-9644fcd446a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            }
            alt="รถตัดอ้อย"
            width="500"
            height="200"
          />
          <h2>
            โปรแกรมประมาณการความคุ้มค่า<br></br>ในการใช้งาน
            <samp>เครื่องเกี่ยวนวดข้าว</samp>
          </h2>
          <Start pathNext="/rice/FirstFormRice"/>
          {/* <Start pathNext="/FirstFormRice"/> */}

        </div>
      </div>
    </div>
  );
}

export default Home;
