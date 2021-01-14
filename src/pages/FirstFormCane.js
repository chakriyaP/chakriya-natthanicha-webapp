import React, { useState, useEffect } from "react";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import Footer from "../components/ButtonForForm.js";
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
    <div className="bg-img d-flex justify-content-center align-items-center row font  ml-0 mr-0">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div className="card primary-bg " style={{ borderRadius: "40px" }}>
          <div className="bg-form card-header text-center p-4 " style={{ borderTopLeftRadius: "40px",borderTopRightRadius:"40px" }}>
            <h2>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">รถตัดอ้อย</samp>
            </h2>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
            <StatusBar status="1" />
            <div className="mt-4 mb-3 border-bottom ">
              <h4>ข้อมูลทั่วไป</h4>
            </div>
          </div>
          <form
            className="mr-0 ml-0"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <InputForm
              nameLable="ราคาแรกซื้อรถ"
              nameInput="p"
              type="number"
              value={valueDeault["P"]}
              unit="บาท"
              // background="#f2f2f2"
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
              // background="#f2f2f2"
            />

            <InputForm
              nameLable="อัตราดอกเบื้ย(ร้อยละ)"
              nameInput="i"
              type="number"
              value={valueDeault["I"]}
              unit="%"
            />

            <div className="card-body d-flex flex-column align-items-center ">
              <div className="col-lg-8 col-md-8 col-sm-10">
                <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FirstFormCane;
