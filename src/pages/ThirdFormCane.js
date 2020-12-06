import React from 'react'
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { useHistory } from "react-router-dom";


function ThirdFormCane() {
   let history = useHistory();

  var valueDeault = JSON.parse(sessionStorage.getItem("valueDeault"));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    history.push("/chakriya-natthanicha-webapp/caneProcess");
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/cane2");
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
            <StatusBar status="3" />
            <div className="mt-4 mb-3 border-bottom col-10">
            ข้อมูลการทำงานในรอบปี<br></br>(ประมาณการ)
            </div>
            <form className="col-10" onSubmit={handleSubmit}
              onReset={handleReset}>
              <InputForm
                nameLable="พื้นที่เก็บเกี่ยว"
                nameInput="FC"
                type="number"
                value={valueDeault["FC"]}
                unit="ไร่"
              />

              <InputForm
                nameLable="ค่าจ้างเก็บเกี่ยว"
                nameInput="H"
                type="number"
                value={valueDeault["H"]}
                unit="บาท/ไร่"
              />
                <InputForm
                nameLable="ความสามารถในการทำงานของเครื่อง"
                nameInput="W"
                type="number"
                value={valueDeault["W"]}
                unit="ปี"
              />

            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ThirdFormCane
