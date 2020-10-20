import React from "react";
import "../assets/css/ButtonForForm.css";
import { Router, Switch, Route, Link } from "react-router-dom";


function ButtonForForm({pathNext}) {
  // const prePath = `/${prePage}`
  // const nextPath = `/${nextPage}`
  console.log(pathNext);

  return (
    <div className="d-flex flex-row justify-content-around mt-5 ">
          <button type="button" class="btn  bt-rice-back shadow-lg ">
            ยกเลิก
          </button>
          <button type="submit" class="btn bt-rice-next shadow-lg" href={pathNext}>
            ถัดไป
          </button>
    </div>
  );
}
export default ButtonForForm;
