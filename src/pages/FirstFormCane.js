import React, { useState, useEffect } from "react";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { useHistory } from "react-router-dom";



import "../assets/css/FirstFormCane.css";

function FirstFormCane() {
  let history = useHistory();

  var valueDeault = JSON.parse(sessionStorage.getItem("valueDeault"));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    history.push("/chakriya-natthanicha-webapp/cane2");
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/caneProcess");
  };

  return (
    <div className="bg-img d-flex justify-content-center align-items-center row font">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div className="card br-5">
          <div className="card-header text-center">
            <h3>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">รถตัดอ้อย</samp>
            </h3>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
            <StatusBar status="1" />
            <div className="mt-4 mb-3 border-bottom col-10">
              <h5>ข้อมูลทั่วไป</h5>
            </div>
            <form className="col-10" onSubmit={handleSubmit}
              onReset={handleReset}>
              <InputForm
                nameLable="ราคาแรกซื้อรถ"
                nameInput="p"
                type="number"
                value={valueDeault["P"]}
                unit="บาท"
              />
              <InputForm
                nameLable="คาดว่าจะใช้งานเครื่องกี่ปี"
                nameInput="Y"
                type="number"
                value={valueDeault["Y"]}
                unit="ปี"
              />

              <InputForm
                nameLable="ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน"
                nameInput="S"
                type="number"
                value={valueDeault["S"]}
                unit="บาท"
              />

              <InputForm
                nameLable="อัตราดอกเบื้ย(ร้อยละ)"
                nameInput="i"
                type="number"
                value={valueDeault["I"]}
                unit="%"
              />
             
                <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป" />
             
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default FirstFormCane;
