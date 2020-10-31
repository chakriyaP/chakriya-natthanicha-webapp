import React, { useState } from "react";

import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import SecondFormRice from "../pages/SecondFormRice.js";
import { Link } from "react-router-dom";


import "../assets/css/FirstFormCane.css";

function FirstformRice() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("jhkjhkjhkh");
    alert("A name was submitted: " + value);
  };

  // const form = document.getElementById('firstFormRice');
  // console.log(form.value);

  return (
    // <Router>
    <div className="bg-img d-flex justify-content-center align-items-center row font">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div className="card br-5">
          <div className="card-header text-center">
            <h3>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
            </h3>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
            <StatusBar status="1" />
            <div className="mt-4 mb-3  col-10">
              <h5 className="text-center">ข้อมูลทั่วไป</h5>
            </div>
            {/* <Child1 clock={(value) => console.log('s', value)}></Child1> */}

            <form className="col-10" id="firstFormRice" onSubmit={handleSubmit}>
              <InputForm
                nameLable="ราคาแรกซื้อ"
                nameInput="p"
                type="number"
                placeholder="ราคาแรกซื้อ"
                unit="บาท"
                onChange={(e) => console.log(e)}
              />

              <InputForm
                nameLable="ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน"
                nameInput="s"
                type="number"
                placeholder="ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน"
                unit="บาท"
                onChange={(e) => console.log(e.target.value)}
              />
              <InputForm
                nameLable="คาดว่าจะใช้งานเครื่องกี่ปี"
                nameInput="y"
                type="number"
                placeholder="คาดว่าจะใช้งานเครื่องกี่ปี"
                unit="ปี"
                onChange={(e) => console.log(e.target.value)}
              />
              <InputForm
                nameLable="อัตราดอกเบื้ย(ร้อยละ)"
                nameInput="i"
                type="number"
                placeholder="อัตราดอกเบื้ย(ร้อยละ)"
                unit="%"
                onChange={(e) => console.log(e.target.value)}
              />

              <ButtonForForm
                namePer="ย้อนกลับ"
                nameNext="ถัดไป"
                pathPer="home"
                pathNext="rice2"
                onChange={(e) => console.log(e.target.value)}

              />
            </form>
          </div>
        </div>
      </div>
    </div>
    /* <Switch>
      <Route path="/rice/las" component={SecondFormRice}/>
    </Switch>
    </Router> */
  );
}

export default FirstformRice;
