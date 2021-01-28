import React from "react";

export const CradProCane = (props) => {
  const { nameLable, valuePro, unit, fristColor, seconeColor } = props;

  return (
    <div class="card text-center " style={{ backgroundColor: fristColor, borderRadius:"15px", border:"none" }}>
      <div class="card-header font-weight-bold">{nameLable}</div>
      <div
        class="card-body"
        style={{ backgroundColor: seconeColor, border: "none", borderBottomLeftRadius:"15px",borderBottomRightRadius: "15px" }}
      >
        <p class="card-text font-weight-bold fs-5" style={{  border:"none" }}> 
          {valuePro}
        </p>
        <p class="card-text ml-5">{unit}</p>
      </div>
    </div>
  );
};


//fontSize: "1.25em"