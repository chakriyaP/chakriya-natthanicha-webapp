import React from "react";
import Nav from "../components/NavigationBar.js";
import "../assets/css/Home.css";
import { Start } from "../components/StartButton.js";
import "../assets/css/ButtonForForm.css";
import "../assets/css/common.css";
import footer1 from "../components/Footer"
import { useHistory } from "react-router-dom";


function Home() {
  let history = useHistory();
  
  window.localStorage.setItem(`countProcrsee`,0);
  window.localStorage.setItem(`countProcrseeCane`,0);
  const P = 11722632; //ราคาคันรถ
  const b = 1; //default สูตรสไลค์
  const G = 0; //ค่าโรงเก็บเครื่อง
  const T = 40865; //ค่าภาษี/ประกัน
  const E = 0; //ค่าใช้จ่ายอื่นๆ
  const J = 0; //ค่านายหน้า
  const O = 0; //ค่าน้ำมันเครื่อง
  const TS = 0; //ค่าขนย้ายเครื่อง
  const S = 1172263; //ค่าซากที่คิดว่าจะขายได้
  const I = 2; //ดอกเบี้ย
  const Y = 10; //อายุใช้งาน
  const FA = 2.28; //อัตราสิ้นเปลืองน้ำมัน
  const LA = 9.93; //ค่าคนขับเครื่อง
  const M = 26.52; //ซ่อม
  const FC = 21; //น้ำมันจริงๆต้องดึง api
  const valueDeault = { P, b, G, T, E, J, O, TS, S, I, Y, FA, LA, M, FC };
  sessionStorage.setItem("valueDeault", JSON.stringify(valueDeault));

  const nextRice = () => {
    history.push("/chakriya-natthanicha-webapp/rice");
  }

  const nextCane = () => {
    history.push("/chakriya-natthanicha-webapp/caneProcess");

  }
  return (
    <div>
      <div className="homePage row">
        <div className="home-body col-12">
          <div className="card-header text-center backGround col-sm-12  mb-4 mt-0 ">
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
              <a onClick={nextRice} class="btn  bt-rice-next">
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
              <h5 class="card-title font  text-white ">
                การประมวณผลความคุ้มค่าในการใช้งาน
              </h5>
              <h5 className="font second-cl ml-1 ">เครื่องตัดอ้อย</h5>
              <a onClick={nextCane} href="#" class="btn bt-rice-next">
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
