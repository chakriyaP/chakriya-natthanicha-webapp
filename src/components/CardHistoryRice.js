import React from "react";
import "../assets/css/CardHistoryRice.css";
import CardDetail from "../components/CardDetail";
import "../assets/css/Home.css";
import { NumberFormat } from "../utils/Function"

function CardHistory(props) {
  const {titleCard, procressObject} = props

  


  return (
    <div className="col-lg-11" >
      <div
        class="card mb-3  backGround   "
        style={{ borderRadius: "25px" }}>
        <div class="row no-gutters ">
          <div
            class="rounded-sm col-lg-2 col-md-2 d-flex justify-content-center align-items-center bg-card-history "
            style={{
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
              
            }}> 
            <h5 class=" font card-title p-4 "style={{textAlign:"center"}}>{titleCard}</h5>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12">
            <div className="row p-2 d-flex flex-row  justify-content-center align-items-center" style={{textAlign:"center"}}>
              <CardDetail
                icon="0"
                nameCard="ค่าใช้จ่ายคงที่"
                outPutCard={NumberFormat(procressObject["fixedCost"])}
                unitCard="บาท/ปี"
                backgroundColor="#eee"
                titleColor = "#353E3B"
                unitColor = "#353E3B"
                iconColor="#353E3B"
              />
              <CardDetail
                icon="1"
                nameCard="ค่าใช้จ่ายแปรผัน"
                outPutCard={NumberFormat(procressObject["v"])}
                unitCard="บาท/ปี"
                backgroundColor="#eee"
                titleColor = "#353E3B"
                unitColor = "#353E3B"
                iconColor="#353E3B"
              />
              <CardDetail
                icon="2"
                nameCard="รายรับจากการรับจ้างเก็บเกี่ยว"
                outPutCard={NumberFormat(procressObject["h"])}
                unitCard="บาท/ปี"
                backgroundColor="#353E3B"
                titleColor = "#eee"
                unitColor = "#eee"
                iconColor="#eee"
              />
              <CardDetail
                icon="3"
                nameCard="ระยะเวลาคืนทุน"
                outPutCard={NumberFormat(procressObject["payBackPeriod"])}
                unitCard="ปี"
                backgroundColor="#353E3B"
                titleColor = "#eee"
                unitColor = "#eee"
                iconColor="#eee"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHistory;
