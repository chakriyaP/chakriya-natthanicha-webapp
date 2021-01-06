import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { Link } from "react-router-dom";
import {  useHistory } from "react-router-dom";

import { riceAction } from "../redux/actions/rice-action";

import "../assets/css/FirstFormCane.css";

function ThirdFormRice() {
  const [rice3, setRice3] = useState({});
  const dispatch = useDispatch()

  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(riceAction.setRice3(rice3));

    // คำนวณ ...

     //เปลี่ยนไปหน้าถัดไป
    history.push("/chakriya-natthanicha-webapp/riceProcess");
  };

  // เอาค่าที่ได้จาก form ไปเก็บไว้
  const handleChange = (e) => {
    setRice3({
      ...rice3,
      [e.target.name]: +(e.target.value.replace(/,/g, '')),
    });
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/rice2");
  };

  // log ดูค่าที่ได้จากการเก็บเเฉยๆ เวลาค่ามันเปลี่ยน
  useEffect(() => {
    console.log("rice3", rice3);
  }, [rice3]);
  
  return (
    <div className="bg-img d-flex justify-content-center align-items-center row font  ml-0 mr-0">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div className="card " style={{borderRadius: "40px"}}>
          <div className="card-header text-center">
            <h3>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
            </h3>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
            <StatusBar status="3" />
            <div className="mt-4 mb-3 col-10">
              <h5 className="text-center">
                ข้อมูลการทำงานในรอบปี<br></br>(ประมาณการ)
              </h5>
            </div>
            <form className="col-10" onSubmit={handleSubmit} onReset={handleReset}>
              <InputForm
                nameLable="พื้นที่เก็บเกี่ยวข้าวนาปี"
                nameInput="af"
                placeholder="พื้นที่เก็บเกี่ยวข้าวนาปี"
                unit="ไร่"
                onChange={handleChange}

              />
               <InputForm
                nameLable="ค่าจ้างเก็บเกี่ยวข้าวนาปี"
                nameInput="wf"
                placeholder="ค่าจ้างเก็บเกี่ยวข้าวนาปี"
                unit="บาท/ไร่"
                onChange={handleChange}

              />
              <InputForm
                nameLable="พื้นที่เก็บเกี่ยวข้าวนาปรัง"
                nameInput="as"
                placeholder="พื้นที่เก็บเกี่ยวข้าวนาปรัง"
                unit="ไร่"
                onChange={handleChange}

              />
              <InputForm
                nameLable="ค่าจ้างเก็บเกี่ยวข้าวนาปรัง"
                nameInput="ws"
                placeholder="ค่าจ้างเก็บเกี่ยวข้าวนาปรัง"
                unit="บาท/ไร่"
                onChange={handleChange}

              />
             
              <InputForm
                nameLable="ความสามารถในการทำงานของเครื่อง"
                nameInput="w"
                placeholder="ความสามารถในการทำงานของเครื่อง"
                unit="ไร่/วัน"
                onChange={handleChange}

              />
            
              <ButtonForForm
                namePer="ย้อนกลับ"
                nameNext="ประมวณผล"
        
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdFormRice;
