import React from "react";
import Nav from "../components/NavigationBar.js";
import "../assets/css/Home.css";
import { Start } from "../components/StartButton.js";
import "../assets/css/ButtonForForm.css";
import "../assets/css/common.css";
import Footer from "../components/Footer"
import { useHistory } from "react-router-dom";


function Home() {
  let history = useHistory();
  
  window.localStorage.setItem(`countProcrsee`,0);
  window.localStorage.setItem(`countProcrseeCane`,0);

  const P = 11722632; //ราคาคันรถอ้อย
  const S = 1172263; //มูลค่าซาก
  const Y = 10 //อายุการใช้งาน
  const I = 2 //ดอกเบี้ยพิเศษ
  const T = 40865 //ประกันภาษี
  const G = 0 //ค่าโรงเก็บเครื่อง
  const E = 0 // ค่าอื่นๆ
  const LA = 9.93 //แรงงานขับรถ
  const M = 26.52 // ค่าซ่อมบำรุง
  const FA = 2.28 //อัตราการสิ้นเปลืองน้ำมัน
  const TS = 0 //ค่าค้นย้ายเครื่อง
  const O = 0 //ค่าน้ำมันเครื่อง
  const J = 0 //ค่านายหน้า
  
  const FC = 20.94 //น้ำมัน api เปลี่ยนน้ำมันใหม้ B10

  const valueDeault = { P, S, Y , I , T ,G, E, LA, M, FA, TS, O , J , FC };
  sessionStorage.setItem("valueDeault", JSON.stringify(valueDeault));

  

  const nextRice = () => {
    history.push("/chakriya-natthanicha-webapp/rice");
  }

  const nextCane = () => {
    history.push("/chakriya-natthanicha-webapp/caneProcess");

  }
  return (
    <div>
      <div className=" homePage ">
        <div className="home-body">
          <div className="card-header text-center backGround col-sm-12  mb-4 mt-0 ">
            <h2 className="font ml-1 ">
              โปรแกรม
              <span className="font second-cl ml-1 ">ประมาณการความคุ้มค่า</span>
            </h2>
            <h3 className="font ml-1 ">ในการใช้งานเครื่องจักรกลทางการเกษตร</h3>
          </div>
        </div>
        <div class="row col-12 mt-4 d-flex justify-content-center align-items-center ml-0" style={{position:"absolute", top: 300, zIndex:100}}>
          <div class=" container-fluid card-deck col-sm-5  col-md-4 col-lg-3  mb-4 bg-transparent  border-0 mr-2"  >
            <img
              src="https://images.unsplash.com/photo-1565647952915-9644fcd446a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              class="card-img-top mt-2 "
              alt="image"
            ></img>
            <div class="card-body text-center">
              <h5 class="card-title font  text-white">
                การประมวณผลความคุ้มค่าในการใช้งาน<span className="font second-cl ml-0 mr-0 ">เครื่องเกี่ยวนวดข้าว</span>
              </h5>
              <a onClick={nextRice} href="#" class="btn  bt-rice-next">
                เริ่มต้นใช้งาน
              </a>
            </div>
          </div>

          <div class=" container-fluid card-deck  col-sm-5 col-md-4  col-lg-3 mb-4 bg-transparent border-0  ml-2">
            <img
              src="https://assets.cnhindustrial.com/caseih/APAC/APACASSETS/Products/Harvesters/Sugar-Cane-Harvester-Austoft-8010/036-case_case-ih-coloured_3533_1056.jpg"
              class="card-img-top mt-2"
              alt="image"
            ></img>
            <div class="card-body text-center">
              <h5 class="card-title font  text-white ">
                การประมวณผลความคุ้มค่าในการใช้งาน<span className="font second-cl ml-1 ">เครื่องตัดอ้อย</span>
              </h5>

              <a onClick={nextCane} href="#" class="btn bt-rice-next">
                เริ่มต้นใช้งาน
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 bg-dark" style={{ height: 300 }}></div>
        {/* <div className="col-12 bg-light" style={{ height: 300 }}>
          <footer1></footer1>
        </div> */}
        <Footer/>
      </div>
    </div>
  );
}

export default Home;


