import React, { useState } from "react";
import "../assets/css/InputSelect.css";

const InputSelect = (props) => {
  const { nameLable,nameInput, inputSelect1,inputSelect2,inputSelect3, onChange } = props;
  return (
    <div><label htmlFor={nameInput}>{nameLable}</label>
    <div class="input-group mb-3">
        <select class="custom-select " id="inputGroupSelect01">
        <option value="1">{inputSelect1}</option>
        <option value="2">{inputSelect2}</option>
        <option value="3">{inputSelect3}</option>
      </select>
    </div>
    </div>
  );
};
export default InputSelect;
