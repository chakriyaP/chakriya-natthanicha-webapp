import React from "react";
import "../assets/css/ButtonForForm.css";

function ButtonForForm({nextButton, previousButton}) {
  return (
    //container-fluid row d-flex align-items-center justify-content-around 
    <div className=" container-fluid d-flex flex-row  d-flex justify-content-center   mt-5 ">
        <button type="button" class="btn  bt-rice-back shadow-lg ">{previousButton}</button>
        <button type="submit" class="btn bt-rice-next shadow-lg">{nextButton}</button>
        
    </div>

  );
}
export default ButtonForForm;
