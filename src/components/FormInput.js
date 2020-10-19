import React from "react";
import "../assets/css/navigationBar.css";


function FormInput({ nameLable, nameInput, type, placeholder, unit }) {
  return (
    <div class="form-group">
      <label for={nameInput}>{nameLable}</label>
      <div class="input-group mb-3">
        <input
          id={nameInput}
          type={type}
          class="form-control"
          placeholder={placeholder}
        />
        <div class="input-group-append">
          <span class="input-group-text primary-bg" >
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
