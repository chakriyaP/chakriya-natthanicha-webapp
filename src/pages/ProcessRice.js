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


  const { mc, tsa , p, s, y, i} = rice1
  const {la, fa, fc, ja, oa, oc, ol, t, e, g} = rice2
  const {af, wf, as, ws, w} = rice3

  // console.log('RICE1' , mc);
  //การประมวลผล
  // 1.ค่าใช้จ่ายคงที่
  const d = ((p-s)/y);
  const it = (((p-s)/2)*(i/100));
  const fixedCost = d + it + g + t+ e;
  // 2.ค่าใช้จ่ายแปรผัน
  const l = la * (af + as);
  const j = ja * (af + as);
  const f = fa * fc * (af + as);
  const o = (ol/oa) * oc * (af + as);
  const m = mc + (af + as);
  const ts = tsa * (af + as)
  const v = l + j + f + o + m + ts;
   // 3.รายรับจากการรับจ้างเก็บเกี่ยว
   let h = (af * wf) + (as * ws);
   // 4.ระยะเวลาคืนทุน
   let payBackPeriod = (p - s) / (h - it - g - t - e - v)


  console.log("notconst", ((p-s)/y));
  console.log("have", d);



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
            priceProcess={fixedCost}
           
          />
        </div>

        <div className="col-sm-10 col-lg-3 mb-2">

          <CardProRice
            icon="1"
            nameCard="ค่าใช้จ่ายแปรผัน"
            priceProcess={v}
           
          />
        </div>
        <div className="col-sm-10 col-lg-3 mb-2">

          <CardProRice
            icon="2"
            nameCard="รายรับจากการเก็บเกี่ยวข้าว"
            priceProcess={h}
           
          />
        </div>
        <div className="col-sm-10 col-lg-3 mb-2">

          <CardProRice
            icon="3"
            nameCard="ระยะเวลาคืนทุน"
            priceProcess={payBackPeriod}
           
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
