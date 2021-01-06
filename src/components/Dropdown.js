import React from "react";
// import Select from 'react-select'

const Dropdown = (props) => {
  const { nameLable, optionLabal,options ,onChange} = props;

  return (
    <div className="form-group">
      <label>{nameLable}</label>
      <div className="input-group mb-3">
      {/* <Select options={options} /> */}
      <select 
      required
      className="form-control" 
      onChange={onChange}
      value={undefined}
      >
        <option selected disabled> {optionLabal} </option>
        {options.map((option) => {
          return <option value={option.value}> {option.name}</option>;
        })}
      </select>
      </div>
    </div>
  );
};

export default Dropdown;
