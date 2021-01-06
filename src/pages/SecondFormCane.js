import React from 'react'
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SecondFormCane() {
  let history = useHistory();
  var valueDeault = JSON.parse(sessionStorage.getItem("valueDeault"));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    history.push("/chakriya-natthanicha-webapp/cane3");
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/cane");
  };
    return (
        <div className="bg-img d-flex justify-content-center align-items-center row font  ml-0 mr-0">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
          <div className="card "style={{borderRadius: "40px"}}>
            <div className="card-header text-center">
              <h3>
                โปรแกรมประมาณการความคุ้มค่า
                <br></br>ในการใช้งาน
                <samp className="font second-cl ml-1">รถตัดอ้อย</samp>
              </h3>
            </div>
            <div className="card-body d-flex flex-column align-items-center row">
              <StatusBar status="2"/>
              <div className="mt-4 mb-3 border-bottom col-10">
                <h5>ข้อมูลค่าใช้จ่าย</h5>
            </div>
              <form className="col-10" onSubmit={handleSubmit}
              onReset={handleReset}>
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
               
                <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป"/>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SecondFormCane
