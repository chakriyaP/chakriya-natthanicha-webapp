import React from "react";
import "../assets/css/ButtonForForm.css";
import { Link } from "react-router-dom";

function ButtonForForm({ namePer, nameNext }) {

  return (
    <div className="d-flex flex-row justify-content-around mt-5 ">
      
      <button type="reset" className="btn  bt-rice-back shadow-lg">
        {namePer}
      </button>
   
    
  
        <button type="submit" className="btn bt-rice-next shadow-lg" >
          {nameNext}
        </button>

    </div>
  );
}
export default ButtonForForm;
