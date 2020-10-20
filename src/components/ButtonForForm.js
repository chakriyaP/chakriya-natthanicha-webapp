import React from "react";
import "../assets/css/ButtonForForm.css";

function ButtonForForm() {
  return (

    <div className="d-flex flex-row justify-content-around mt-5 ">
        <button type="button" class="btn  bt-rice-back shadow-lg ">ยกเลิก</button>
        <button type="submit" class="btn bt-rice-next shadow-lg">ถัดไป</button>
    </div>

  );
}
export default ButtonForForm;
