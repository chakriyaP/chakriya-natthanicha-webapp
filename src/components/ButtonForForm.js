import React from "react";
import "../assets/css/ButtonForForm.css";
import { Link } from "react-router-dom";

function ButtonForForm({ namePer, nameNext, pathPer }) {

  //set path next , per
  const toPathPer = `/chakriya-natthanicha-webapp/${pathPer}`
  // const toPathNext = `/chakriya-natthanicha-webapp/${pathNext}`

  return (
    <div className="d-flex flex-row justify-content-around mt-5 ">
      {/* <Link to={toPathPer}> */}
      <button type="reset" className="btn  bt-rice-back shadow-lg">
        {namePer}
      </button>
      {/* </Link> */}
    
      {/* <Link to={toPathNext}> */}
        <button type="submit" className="btn bt-rice-next shadow-lg" >
          {nameNext}
        </button>
      {/* </Link> */}
    </div>
  );
}
export default ButtonForForm;
