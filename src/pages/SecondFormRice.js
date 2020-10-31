import React from "react";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { Link } from "react-router-dom";

import "../assets/css/FirstFormCane.css";

function SecondFormRice() {
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
            <StatusBar status="2"/>
            <div className="mt-4 mb-3 col-10">
              <h5 className="text-center">ข้อมูลค่าใช้จ่าย</h5>
            </div>
            <form className="col-10">
              <InputForm
                nameLable="ค่าคนขับและคนดูแลเครื่อง"
                nameInput="la"
                type="number"
                placeholder="ค่าคนขับและคนดูแลเครื่อง"
                unit="บาท/ไร่"
              />
              <InputForm
                nameLable="อัตราการใช้น้ำมันเชื้อเพลิง"
                nameInput="fa"
                type="number" 
                placeholder="อัตราการใช้น้ำมันเชื้อเพลิง"
                unit="ลิตร/ไร่"
              />
              <InputForm
                nameLable="ราคาน้ำมันเชื้อเพลิง"
                nameInput="fc"
                type="number"
                placeholder="ราคาน้ำมันเชื้อเพลิง"
                unit="ลิตร/ไร่"
              />
              <InputForm
                nameLable="ค่านายหน้า"
                nameInput="number"
                type="ja"
                placeholder="ค่านายหน้า"
                unit="บาท/ปี"
              />
              <InputForm
                nameLable="รอบการเปลี่ยนน้ำมันเครื่องทุกการใช้งานกี่ไร่"
                nameInput="oa"
                type="number"
                placeholder="รอบการเปลี่ยนน้ำมันเครื่องทุกการใช้งานกี่ไร่"
                unit="ไร่"
              />
              <InputForm
                nameLable="จำนวนน้ำมันเครื่องที่ต้องการเปลี่ยนในแต่ละครั้ง"
                nameInput="ol"
                type="number"
                placeholder="จำนวนน้ำมันเครื่องที่ต้องการเปลี่ยนในแต่ละครั้ง"
                unit="ลิตร"
              />
              <InputForm
                nameLable="ราคาน้ำมันเครื่อง"
                nameInput="oc"
                type="number"
                placeholder="ราคาน้ำมันเครื่อง"
                unit="บาท/ลิตร"
              />
              <InputForm
                nameLable="ค่าโรงเก็บเครื่อง"
                nameInput="g"
                type="number"
                placeholder="ค่าโรงเก็บเครื่อง"
                unit="บาท/ปี"
              />
              <InputForm
                nameLable="ค่าภาษี/ประกัน"
                nameInput="t"
                type="number"
                placeholder="ค่าภาษี/ประกัน"
                unit="บาท/ปี"
              />
              <InputForm
                nameLable="ค่าใช้จ่ายอื่นๆ"
                nameInput="e"
                type="number"
                placeholder="ค่าใช้จ่ายอื่นๆ"
                unit="บาท/ปี"
              />
               <ButtonForForm
                namePer="ย้อนกลับ"
                nameNext="ถัดไป"
                pathPer="rice"
                pathNext="rice3"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondFormRice;
