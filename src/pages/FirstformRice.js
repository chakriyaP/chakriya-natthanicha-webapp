import React from "react";
import StatusBar from "../components/StatusBar.js";
import "../assets/css/FirstformRice.css";

function FirstformRice() {
  let widthAndHight = 60;
  return (
    <div id="first-form">
      <div className="block">
        <div className = "header-form">
          <h1>
            โปรแกรมประเมินการประมาณการความคุ้มค่า
          </h1>
          <h2>
            ในการใช้เครื่องเกี่ยวนวดข้าว
          </h2>
        </div>
        <StatusBar ></StatusBar>
        <div className="form">
          <form className = "fill-form">
            <div className = "region">
              <h3>ภูมิภาค</h3>
              <form action="/action_page.php"></form>
                <label for="region"></label>
                <select id="selectForm">
                  <option value="select">เลือกภูมิภาค</option>
                    <option value="north">เหนือ</option>
                    <option value="central">กลาง</option>
                    <option value="east">ตะวันออก</option>
                    <option value="noth-east">ตะวันออกเฉียงเหนือ</option>
                </select>
            </div>
            <div className = "price">
              <h3>ราคาแรกซื้อ</h3>
              <input className="fillPrice" placeholder="ราคาแรกซื้อ">
              </input>
            </div>
            <div className = "price">
              <h3>ราคาแรกซื้อ</h3>
              <input className="fillPrice" placeholder="ราคาแรกซื้อ">
              </input>
            </div>
            <div className = "price2">
              <h3>ราคาที่คาดว่าจะขายได้เมื่อเลิกใช้งาน</h3>
              <input className="fillPrice2" placeholder="ราคาที่คาดว่าจะขายได้เมื่อเลิกใช้งาน">
              </input>
            </div>
            <div className = "price3">
              <h3>เวลาที่ใช้เครื่องจักร</h3>
              <input className="fillPrice3" placeholder="คาดว่าจะใช้กี่ปี">
              </input>
            </div>
            <div className = "price4">
              <h3>อัตราดอกเบี้ย</h3>
              <input className="fillPrice" placeholder="อัตราดอกเบี้ย">
              </input>
            </div>
            <div className = "buttonFill">
                <button className="buttonBack" ><h2>ย้อนกลับ</h2></button>
                <button className="buttonNext" ><h2>ถัดไป</h2></button>
            </div>
          </form>
        </div>
      </div>
      <footer>
          <div className = "reg"></div>
          <p>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น<br></br>
          ถนนมิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002<br></br>
          โทรศัพท์ 043-009700<br></br>
          โทรสาร 043-362087 ,043-362142</p>
      </footer>
    </div>
  );
}

export default FirstformRice;
