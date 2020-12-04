import React from "react";

const Dropdown = (props) => {
  const { nameLable, optionLabal,options ,onSelected} = props;

  return (
    <div>
      <label>{nameLable}</label>
      <div className="input-group mb-3">
      <select className="form-control" onChange={onSelected} required>
        <option selected disabled> {optionLabal} </option>
        {options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
      </div>
    </div>
  );
};

export default Dropdown;
