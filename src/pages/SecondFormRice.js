import React, { useState, useEffect } from "react";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import {  useHistory } from "react-router-dom";

import "../assets/css/FirstFormCane.css";

function SecondFormRice() {
  const [rice2, setRice2] = useState({});

  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // คำนวณ ...

     //เปลี่ยนไปหน้าถัดไป
    history.push("/chakriya-natthanicha-webapp/rice3");
  };

  // เอาค่าที่ได้จาก form ไปเก็บไว้
  const handleChange = (e) => {
    setRice2({
      ...rice2,
      [e.target.name]: e.target.value,
    });
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/rice");
  };

  // log ดูค่าที่ได้จากการเก็บเเฉยๆ เวลาค่ามันเปลี่ยน
  useEffect(() => {
    console.log("rice2", rice2);
  }, [rice2]);

  return (
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
            <StatusBar status="2" />
            <div className="mt-4 mb-3 col-10">
              <h5 className="text-center">ข้อมูลค่าใช้จ่าย</h5>
            </div>
            <form
              className="col-10"
              id="seconeFormRice"
              onSubmit={handleSubmit}
              onReset={handleReset}
            >
              <InputForm
                nameLable="ค่าคนขับและคนดูแลเครื่อง"
                nameInput="la"
                placeholder="ค่าคนขับและคนดูแลเครื่อง"
                unit="บาท/ไร่"
                onChange={handleChange}
              />
              <InputForm
                nameLable="อัตราการใช้น้ำมันเชื้อเพลิง"
                nameInput="fa"
                placeholder="อัตราการใช้น้ำมันเชื้อเพลิง"
                unit="ลิตร/ไร่"
                onChange={handleChange}
              />
              <InputForm
                nameLable="ราคาน้ำมันเชื้อเพลิง"
                nameInput="fc"
                placeholder="ราคาน้ำมันเชื้อเพลิง"
                unit="ลิตร/ไร่"
                onChange={handleChange}
              />
              <InputForm
                nameLable="ค่านายหน้า"
                nameInput="ja"
                placeholder="ค่านายหน้า"
                unit="บาท/ปี"
                onChange={handleChange}
              />
              <InputForm
                nameLable="รอบการเปลี่ยนน้ำมันเครื่องทุกการใช้งานกี่ไร่"
                nameInput="oa"
                placeholder="รอบการเปลี่ยนน้ำมันเครื่องทุกการใช้งานกี่ไร่"
                unit="ไร่"
                onChange={handleChange}
              />
              <InputForm
                nameLable="จำนวนน้ำมันเครื่องที่ต้องการเปลี่ยนในแต่ละครั้ง"
                nameInput="ol"
                placeholder="จำนวนน้ำมันเครื่องที่ต้องการเปลี่ยนในแต่ละครั้ง"
                unit="ลิตร"
                onChange={handleChange}
              />
              <InputForm
                nameLable="ราคาน้ำมันเครื่อง"
                nameInput="oc"
                placeholder="ราคาน้ำมันเครื่อง"
                unit="บาท/ลิตร"
                onChange={handleChange}
              />
              <InputForm
                nameLable="ค่าโรงเก็บเครื่อง"
                nameInput="g"
                placeholder="ค่าโรงเก็บเครื่อง"
                unit="บาท/ปี"
                onChange={handleChange}
              />
              <InputForm
                nameLable="ค่าภาษี/ประกัน"
                nameInput="t"
                placeholder="ค่าภาษี/ประกัน"
                unit="บาท/ปี"
                onChange={handleChange}
              />
              <InputForm
                nameLable="ค่าใช้จ่ายอื่นๆ"
                nameInput="e"
                placeholder="ค่าใช้จ่ายอื่นๆ"
                unit="บาท/ปี"
                onChange={handleChange}
              />
              <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondFormRice;
