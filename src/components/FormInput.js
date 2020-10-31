import React, { useState } from "react";
import "../assets/css/navigationBar.css";

const FormInput = (props) => {
  
  const {
    nameLable,
    nameInput,
    type,
    placeholder,
    unit,
    onChange
  } = props

 const [value, setValue] = useState();

  const  formatNumber = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleChange = (e) => {
    // setValue(formatNumber(e.target.value))
    // onChange(value)
    console.log('e', formatNumber(e.target.value))
  }

  return (
    <div className="form-group">
      <label htmlFor={nameInput}>{nameLable}</label>
      <div className="input-group mb-3">
        <input
          id={nameInput}
          // type={type}
          name={nameInput}
          className="form-control"
          placeholder={placeholder}
          onChange={handleChange}
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          // value=""
          // value={(e) => {
          //   // if (e.target.value) {

          //   // }
          //   e.target.value
          // }}
          
        />
        <div className="input-group-append">
          <span className="input-group-text primary-bg">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
