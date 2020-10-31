import React from 'react'
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { Link } from "react-router-dom";

function ThirdFormCane() {
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
            <StatusBar status="3" />
            <div className="mt-4 mb-3 border-bottom col-10">
            ข้อมูลการทำงานในรอบปี<br></br>(ประมาณการ)
            </div>
            <form className="col-10">
              <InputForm
                nameLable="พื้นที่เก็บเกี่ยว"
                nameInput="fc"
                type="number"
                placeholder="1,206"
                unit="ไร่"
              />

              <InputForm
                nameLable="ค่าจ้างเก็บเกี่ยว"
                nameInput="oa"
                type="number"
                placeholder="200"
                unit="บาท/ไร่"
              />
                <InputForm
                nameLable="ความสามารถในการทำงานของเครื่อง"
                nameInput="oa"
                type="number"
                placeholder="12"
                unit="ปี"
              />

              <Link to="/chakriya-natthanicha-webapp/riceProcess">
                <ButtonForForm namePer="ย้อนกลับ" nameNext="ประมวลผล" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ThirdFormCane
