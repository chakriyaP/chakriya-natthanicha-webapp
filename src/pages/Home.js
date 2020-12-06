import React from "react";
import Nav from "../components/NavigationBar.js";
import "../assets/css/Home.css";
import { Start } from "../components/StartButton.js";
import "../assets/css/ButtonForForm.css";
import "../assets/css/common.css";
import footer1 from "../components/Footer"

function Home() {
  return (
    <div>
      <div className="homePage row">
        <div className="home-body col-12">
          <div className=" card-header text-center backGround col-sm-12  mb-4 mt-0 ">
            <h2 className="font ml-1 ">
              โปรแกรม
              <span className="font second-cl ml-1 ">ประมาณการความคุ้มค่า</span>
            </h2>
            <h3 className="font ml-1 ">ในการใช้งานเครื่องจักรกลทางการเกษตร</h3>
          </div>
        </div>
        <div class="col-12 mt-12 d-flex justify-content-center align-items-center " style={{position:"absolute", top: 300, zIndex:100}}>
          <div class="card col-sm-3 d-flex justify-content-center mb-4 bg-transparent mr-2 border-0" >
            <img
              src="https://images.unsplash.com/photo-1565647952915-9644fcd446a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              class="card-img-top mt-2"
              alt="image"
            ></img>
            <div class="card-body text-center">
              <h5 class="card-title font  text-white">
                การประมวณผลความคุ้มค่าในการใช้งาน
              </h5>
              <h5 className="font second-cl ml-1 ">เครื่องเกี่ยวนวดข้าว</h5>
              <a href="#" class="btn  bt-rice-next">
                เริ่มต้นใช้งาน
              </a>
            </div>
          </div>

          <div class="card col-sm-3 mb-4 bg-transparent ml-2 border-0">
            <img
              src="https://assets.cnhindustrial.com/caseih/APAC/APACASSETS/Products/Harvesters/Sugar-Cane-Harvester-Austoft-8010/036-case_case-ih-coloured_3533_1056.jpg"
              class="card-img-top mt-2"
              alt="image"
            ></img>
            <div class="card-body text-center">
              <h5 class="card-title font  text-white">
                การประมวณผลความคุ้มค่าในการใช้งาน
              </h5>
              <h5 className="font second-cl ml-1 ">เครื่องตัดอ้อย</h5>
              <a href="#" class="btn bt-rice-next">
                เริ่มต้นใช้งาน
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 bg-dark" style={{ height: 300 }}></div>
        <div className="col-12 bg-light" style={{ height: 300 }}>
          <footer1></footer1>
        </div>

      </div>
    </div>
  );
}

export default Home;
