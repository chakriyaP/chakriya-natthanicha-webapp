import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Footer from "../components/Footer";
import { riceAction } from "../redux/actions/rice-action";

import "../assets/css/FirstFormCane.css";

function ThirdFormRice() {
  const [rice3, setRice3] = useState({});
  const dispatch = useDispatch();

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
      [e.target.name]: +e.target.value.replace(/,/g, ""),
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
      <div className="col-xs-12 col-sm-12 col-md-11 col-lg-8 mt-5 mb-5">
        <div className="card primary-bg" style={{ borderRadius: "40px" }}>
          <div className="bg-form card-header text-center p-4 " style={{ borderTopLeftRadius: "40px",borderTopRightRadius:"40px" }}>
            <h2>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
            </h2>
          </div>
          <div className="card-body d-flex flex-column align-items-center ">
            <StatusBar status="3" />
            <div className="mt-4 ">
              <h4 className="text-center">
                ข้อมูลการทำงานในรอบปี<br></br>(ประมาณการ)
              </h4>
            </div>
          </div>
          <form
            className="mr-0 ml-0"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <InputForm
              nameLable="พื้นที่เก็บเกี่ยวข้าวนาปี"
              nameInput="af"
              placeholder="200"
              unit="ไร่"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="ค่าจ้างเก็บเกี่ยวข้าวนาปี"
              nameInput="wf"
              placeholder="100"
              unit="บาท/ไร่"
              onChange={handleChange}
            />
            <InputForm
              nameLable="พื้นที่เก็บเกี่ยวข้าวนาปรัง"
              nameInput="as"
              placeholder="200"
              unit="ไร่"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="ค่าจ้างเก็บเกี่ยวข้าวนาปรัง"
              nameInput="ws"
              placeholder="100"
              unit="บาท/ไร่"
              onChange={handleChange}
            />

            <InputForm
              nameLable="ความสามารถในการทำงานของเครื่อง"
              nameInput="w"
              placeholder="10"
              unit="ไร่/วัน"
              onChange={handleChange}
              // background="#f2f2f2"
            />
           
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center mb-5">
              <ButtonForForm namePer="ย้อนกลับ" nameNext="ประมวลผล" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ThirdFormRice;
