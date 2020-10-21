import React from "react";
import "../assets/css/ButtonForForm.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import { Link } from '@react-navigation/native';
import FirstFormRice from "../pages/FirstFormRice.js";
import SecondFormRice from "../pages/SecondFormRice.js";
import ThirdFormRice from "../pages/ThirdFormRice.js";

import FirstFormCane from "../pages/FirstFormCane.js";
// import SecondFormRice from "../pages/SecondFormRice.js"
// import ThirdFormRice from "../pages/ThirrdFormRice.js"

function ButtonForForm() {
  // pathNext.split("/")[0] = "rice"
  // ? (pathNext.split("/")[1] = "FirstFormRice" ? (
  //     <FirstFormRice />
  //   ) : (
  //     (pathNext.split("/")[1] = "SecondFormRice" ? (
  //       console.log("jhkhkl")
  //       // <SecondFormRice />
  //     ) : (
  //       <ThirdFormRice />
  //     ))
  //   ))
  // : (pathNext.split("/")[1] = "FirstFormCane" ? (
  //     <FirstFormCane />
  //   ) : (
  //     (pathNext.split("/")[1] = "SecondFormCane"
  //       ? "rice/SecondFormCane"
  //       : "rice/ThirdFormCane")
  //   ))

  return (
     <div className="d-flex flex-row justify-content-around mt-5 ">
        <button type="button" class="btn  bt-rice-back shadow-lg">
          ยกเลิก
        </button>

          <button type="submit" class="btn bt-rice-next shadow-lg">
            ถัดไป
          </button>
        
      </div>
    // <Router>
    //   <div className="d-flex flex-row justify-content-around mt-5 ">
    //     <button type="button" class="btn  bt-rice-back shadow-lg">
    //       ยกเลิก
    //     </button>
    //     <Link to="/rice/sdsd">
    //     <button type="submit" class="btn bt-rice-next shadow-lg">
    //       ถัดไป
    //     </button>
    //     </Link>
    //   </div>
    //   <Switch>
    //     <Route path="/rice/sdsd">
    //       <ThirdFormRice />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
export default ButtonForForm;
