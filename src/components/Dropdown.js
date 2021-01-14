import React from "react";
// import Select from 'react-select'

const Dropdown = (props) => {
  const { nameLable, optionLabal,options ,onSelected,background} = props;

  return (
    <div className="p-3  pl-5 pr-5" style={{backgroundColor:background}}>
      <label>{nameLable}</label>
      <div className="input-group ">
      <select className="form-control" onChange={onSelected} required>
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
