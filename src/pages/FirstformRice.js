import React from "react";
import StatusBar from "../components/StatusBar.js";
import "../assets/css/FirstformRice.css";
import FormInput from "../components/FormInput.js";
import ButtonForForm from "../components/ButtonForForm.js";



function FirstformRice() {
  return (
    <div className="first-form">
      {/* <Header></Header>
      <div className="selectRG">
        <label  for = "region">เลือกภูมิภาค</label><br></br>
        <select name = "region" id ="region">
          <option>ภาคเหนือ</option>  
          <option>ภาคตะวันออก</option>
          <option>ภาคตะวันตก</option>
          <option>ภาคกลาง</option>
        </select>
      </div>
        <FormInput></FormInput>
        <FormInput></FormInput>
        <FormInput></FormInput>
        <FormInput></FormInput>
        <FormInput></FormInput>
      <ButtonForForm></ButtonForForm> */}

      <div class="card text-center card-rice">
        <div class="card-header header-card">
          <h4>
            โปรแกรมประเมินการประมาณการความคุ้มค่าในการใช้เครื่องเกี่ยวนวดข้าว
          </h4>
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02">
              <option selected>เลือกภูมิภาค</option>
              <option value="1">ภาคเหนือ</option>
              <option value="2">ภาคตะวันออกเฉียงเหนือ</option>
              <option value="3">ภาคตะวันตก</option>
              <option value="4">ภาคกลาง</option>
            </select>
          </div>
          <ButtonForForm></ButtonForForm>
        </div>
        {/* <ActiveState></ActiveState> */}
        {/* <div className="selectRG">
          <label for="region">เลือกภูมิภาค</label>
          <br></br>
          <select name="region" id="region">
            <option>ภาคเหนือ</option>
            <option>ภาคตะวันออก</option>
            <option>ภาคตะวันตก</option>
            <option>ภาคกลาง</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default FirstformRice;
