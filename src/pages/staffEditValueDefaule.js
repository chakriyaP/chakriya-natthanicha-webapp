import React, { useState, useEffect } from "react";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { useHistory } from "react-router-dom";
import { Confirm } from "semantic-ui-react";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function staffEditValueDefaule() {
  // let history = useHistory();

  var valueDeault = JSON.parse(sessionStorage.getItem("valueDeault"));
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    confirmAlert({
      title: 'กรุณาตรวจสอบการแก้ไขข้อมูลให้ละเอียด',
      message: 'คุณตรวจสอบเรียบร้อยแล้ว?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('เปลี่ยนข้อมูลพื้นฐานเรียบร้อยแล้ว')
        },
        {
          label: 'No',
          onClick: () => alert('ยกเลิกการเปลี่ยนแปลง')
        }
      ]
    });

    // history.push("/chakriya-natthanicha-webapp/cane2");
  };

  //ย้อนกลับ
  const handleReset = () => {
    // history.push("/chakriya-natthanicha-webapp/caneProcess");
  };

    return (
        <div className="bg-img d-flex justify-content-center align-items-center row font">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div className="card br-5">
          <div className="card-header text-center p-4">
            <h3>
            แก้ไขตัวแปรพื้นฐาน
             
              <samp className="font second-cl ml-1">รถตัดอ้อย</samp>
            </h3>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
          
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
                <div className="mt-4 mb-3 border-bottom col-10 mt-5">
              <h5>ข้อมูลค่าใช้จ่าย</h5>
            </div>
           
             <InputForm
                  nameLable="ค่าคนขับและคนดูแลเครื่อง"
                  nameInput="LA"
                  type="number"
                  value={valueDeault["LA"]}
                  unit="บาท/ตัน"
                />
                <InputForm
                  nameLable="อัตราการใช้น้ำมันเชื้อเพลิง"
                  nameInput="FA"
                  type="number"
                  value={valueDeault["FA"]}
                  unit="ลิตร/ตัน"
                />
                <InputForm
                  nameLable="ราคาน้ำมันเชื้อเพลิง"
                  nameInput="FC"
                  type="number"
                  value={valueDeault["FC"]}
                  unit="ลิตร/ตัน"
                />
              
              
                <InputForm
                  nameLable="ราคาน้ำมันเครื่อง"
                  nameInput="OC"
                  type="number"
                  value={valueDeault["OC"]}
                  value={21}
                  unit="บาท/ลิตร"
                />
                <InputForm
                  nameLable="ค่าโรงเก็บเครื่อง"
                  nameInput="G"
                  type="number"
                  value={valueDeault["G"]}
                  unit="บาท/ปี"
                />
                <InputForm
                  nameLable="ค่าภาษี/ประกัน"
                  nameInput="T"
                  type="number"
                  value={valueDeault["T"]}
                  unit="บาท/ปี"
                />
                <InputForm
                  nameLable="ค่าใช้จ่ายอื่นๆ"
                  nameInput="E"
                  type="number"
                  value={valueDeault["E"]}
                  unit="บาท/ปี"
                />

<div className="mt-4 mb-3 border-bottom col-10 mt-5">
              <h5>ข้อมูลการทำงานในรอบปี<br></br>(ประมาณการ)</h5>
            </div>
            <InputForm
                nameLable="พื้นที่เก็บเกี่ยว"
                nameInput="FC"
                type="number"
                value={valueDeault["FC"]}
                unit="ไร่"
              />


            
                <ButtonForForm namePer="ย้อนกลับ" nameNext="บันทึกการแก้ไขตัวแปร" />
             
            </form>
          </div>
        </div>
      </div>
      
    </div>
    )
}

export default staffEditValueDefaule
