import React, { useState, useEffect } from "react";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";

import { Link } from "react-router-dom";

import "../assets/css/FirstFormCane.css";

function FirstFormCane() {
  return (
    <div className="bg-img d-flex justify-content-center align-items-center row font">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div className="card br-5">
          <div className="card-header text-center">
            <h3>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน<samp className="font second-cl ml-1">รถตัดอ้อย</samp>
            </h3>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
            <StatusBar status="1"/>
            <div className="mt-4 mb-3 border-bottom col-10">
                <h5>ข้อมูลทั่วไป</h5>
            </div>
            <form className="col-10">
              <InputForm
                nameLable="ราคาแรกซื้อ"
                nameInput="p"
                type="number"
                placeholder="2,000,000"
                unit="บาท"
              />
              <InputForm
                nameLable="ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน"
                nameInput="s"
                type="number"
                placeholder="1,200,000"
                unit="บาท"
              />
              <InputForm
                nameLable="คาดว่าจะใช้งานเครื่องกี่ปี"
                nameInput="y"
                type="number"
                placeholder="5"
                unit="ปี"
              />
              <InputForm
                nameLable="อัตราดอกเบื้ย(ร้อยละ)"
                nameInput="i"
                type="interest"
                placeholder="5"
                unit="%"
              />
               <Link to="/chakriya-natthanicha-webapp/cane2">
              <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป"/>
              </Link>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="container row bg-light mt-5 mb-5 d-flex flex-column align-items-center ">
        <div className="col-12 bg-info">
            <div className="col-12">
               <h3>
            โปรแกรมประมาณการความคุ้มค่า
            <br></br>ในการใช้งาน<samp>รถตัดอ้อย</samp>
          </h3>   
            </div>
        
        </div>
        <StatusBar />
        <form className="col-10">
          <InputForm
            nameLable="ราคาแรกซื้อ"
            nameInput="fristBuy"
            type="text"
            placeholder="20,000"
            unit="บาท/ปี"
          />
          <InputForm
            nameLable="ราคาแรกซื้อ"
            nameInput="fristBuy"
            type="text"
            placeholder="20,000"
            unit="บาท/ปี"
          />
          <InputForm
            nameLable="ราคาแรกซื้อ"
            nameInput="fristBuy"
            type="text"
            placeholder="20,000"
            unit="บาท/ปี"
          />
          <InputForm
            nameLable="ราคาแรกซื้อ"
            nameInput="fristBuy"
            type="text"
            placeholder="20,000"
            unit="บาท/ปี"
          />
        </form>
      </div> */}
    </div>
  );
}

export default FirstFormCane;
