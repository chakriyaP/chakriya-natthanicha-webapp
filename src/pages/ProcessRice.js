import React from "react";
import "../assets/css/ProcessRice.css";
import CardProRice from "../components/CardProRice.js";
import { GrMoney } from "react-icons/gr";
// import FormInput from "../components/FormInput.js";

function ProcessRice() {
  return (    
    <div className="d-flex flex-colum justify-content-center align-items-center">
      <div className="container-fluid row d-flex align-items-center justify-content-around">
        <div className="col-sm-10 col-lg-3 mb-2">
          <CardProRice
            icon="0"
            nameCard="ค่าใช้จ่ายคงที่"
            priceProcess="18,000"
           
          />
        </div>

        <div className="col-sm-10 col-lg-3 mb-2">

          <CardProRice
            icon="1"
            nameCard="ค่าใช้จ่ายแปรผัน"
            priceProcess="18,000"
           
          />
        </div>
        <div className="col-sm-10 col-lg-3 mb-2">

          <CardProRice
            icon="3"
            nameCard="รายรับจากการเก็บเกี่ยวข้าว"
            priceProcess="18,000"
           
          />
        </div>
        <div className="col-sm-10 col-lg-3 mb-2">

          <CardProRice
            icon="2"
            nameCard="ระยะเวลาคืนทุน"
            priceProcess="18,000"
           
          />
        </div>
      </div>
    </div>

    // <div className="container-fluid">
    //   {/* <div class = "d-flex align-items-center justify-content-around row mt-4 "> */}
    //   <div className = "row">

    // </div>
    // </div>
  );
}

export default ProcessRice;
