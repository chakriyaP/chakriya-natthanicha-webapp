import React, { useState, useEffect } from "react";
import "../assets/css/ProcessRice.css";
import CardProRice from "../components/CardProRice.js";
import { GrMoney } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { riceAction } from "../redux/actions/rice-action";
import { RICE_STATE, riceState } from "../redux/reducers/valueRiceReducer";

import ButtonForForm from "../components/ButtonForForm";


function ProcessRice() {
  const rice1 = useSelector(riceState(RICE_STATE.RICE1));
  const rice2 = useSelector(riceState(RICE_STATE.RICE2));
  const rice3 = useSelector(riceState(RICE_STATE.RICE3));

  console.log(`rece1 ${rice1} , rice2 ${rice2} , rice3 ${rice3}`);


  return ( 
    <div className="bg-process pb-">
      <div className="card-header text-center backGround col-sm-12  mb-4 mt-0" >
            <h3 className="font ml-1 ">
              การประมวณผลความคุ้มค่าในการใช้งาน</h3><h3 className="font second-cl ml-1 ">เครื่องเกี่ยวนวดข้าว</h3> 
      </div>
          <div className="d-flex flex-colum justify-content-center align-items-center bodyCard ">
      <div className="container-fluid row d-flex align-items-center justify-content-around ">
        <div className="col-sm-10 col-lg-3 mb-2 ">
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
            icon="2"
            nameCard="รายรับจากการเก็บเกี่ยวข้าว"
            priceProcess="18,000"
           
          />
        </div>
        <div className="col-sm-10 col-lg-3 mb-2">

          <CardProRice
            icon="3"
            nameCard="ระยะเวลาคืนทุน"
            priceProcess="18,000"
           
          />
        </div>
        <Link to="/home"> <ButtonForForm
          namePer="ย้อนกลับ"
          nameNext="บันทึกผลการคำนวณ"
        />
        </Link>
       
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
