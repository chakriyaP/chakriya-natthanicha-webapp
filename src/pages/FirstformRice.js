import React from "react";
import StatusBar from "../components/StatusBar.js";
import "../assets/css/FirstformRice.css";
import FormInput from "../components/FormInput.js";
import ButtonForForm from "../components/ButtonForForm.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function FirstformRice() {
  return (
    <div className="first-form">
      <Header></Header>
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
      <ButtonForForm></ButtonForForm>
    </div>

  );
}

export default FirstformRice;
