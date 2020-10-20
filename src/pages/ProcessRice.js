import React from "react";
import "../assets/css/ProcessRice.css";
import CardProRice from "../components/CardProRice.js";
import { GrMoney } from "react-icons/gr";
import ButtonForForm from "../components/ButtonForForm";


function ProcessRice() {
  return ( 
    <div class = "">
      <div class="card-header text-center backGround col-sm-12  mb-4 " >
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
        <ButtonForForm
          nextButton="บันทึกผลการคำนวณ"
          previousButton="ย้อนกลับ"
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
