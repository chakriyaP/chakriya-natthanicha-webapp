import React from "react";
import "../assets/css/ButtonForForm.css";

function ButtonForForm({ namePer, nameNext }) {
  return (
    <div className="d-flex flex-direction justify-content-around ml-0 mr-0 ">
      <button
        type="reset"
        className="  btn btn-lg bt-rice-back shadow-lg col-lg-5 col-md-6 col-sm-12 mt-5 "
      >
        {namePer}
      </button>

      <button
        type="submit"
        className=" btn btn-lg bt-rice-next shadow-lg col-lg-5 col-md-6 col-sm-12 mt-5 "
      >
        {nameNext}
      </button>
    </div>
  );
}
export default ButtonForForm;
