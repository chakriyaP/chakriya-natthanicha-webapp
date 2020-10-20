import React from 'react'
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js"
import "../assets/css/FirstFormCane.css";

function ThirdFormRice() {
    return (
        <div className="bg-img d-flex justify-content-center align-items-center row font">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
          <div class="card br-5">
            <div class="card-header text-center">
              <h3>
                โปรแกรมประมาณการความคุ้มค่า
                <br></br>ในการใช้งาน
                <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
              </h3>
            </div>
            <div class="card-body d-flex flex-column align-items-center row">
              <StatusBar />
              <div className="mt-4 mb-3 col-10">
                <h5 className="text-center">ข้อมูลการทำงานในรอบปี<br></br>(ประมาณการ)</h5>
              </div>
              <form className="col-10">
                <InputForm
                  nameLable="พื้นที่เก็บเกี่ยวข้าวนาปี"
                  nameInput="la"
                  type="number"
                  placeholder="พื้นที่เก็บเกี่ยวข้าวนาปี"
                  unit="ไร่"
                />
                <InputForm
                  nameLable="พื้นที่เก็บเกี่ยวข้าวนาปรัง"
                  nameInput="fa"
                  type="number"
                  placeholder="พื้นที่เก็บเกี่ยวข้าวนาปรัง"
                  unit="ไร่"
                />
                <InputForm
                  nameLable="ค่าจ้างเก็บเกี่ยวข้าวนาปรัง"
                  nameInput="fc"
                  type="number"
                  placeholder="ค่าจ้างเก็บเกี่ยวข้าวนาปรัง"
                  unit="บาท/ไร่"
                />
                <InputForm
                  nameLable="ความสามารถในการทำงานของเครื่อง"
                  nameInput="number"
                  type="ja"
                  placeholder="ความสามารถในการทำงานของเครื่อง"
                  unit="ปี"
                />
                <InputForm
                  nameLable="ค่าจ้างเก็บเกี่ยวข้าวนาปี"
                  nameInput="oa"
                  type="number"
                  placeholder="ค่าจ้างเก็บเกี่ยวข้าวนาปี"
                  unit="บาท/ไร่"
                />
                
                <ButtonForForm />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ThirdFormRice
