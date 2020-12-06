import React from "react";
import "../assets/css/CardHistoryRice.css";
import CardDetail from "../components/CardDetail";
import "../assets/css/Home.css";

function CardHistory({ titleCard }) {
  return (
    <div >
      <div
        class="card mb-3  backGround row  "
        style={{ maxWidth: "1200px", borderRadius: "25px" }}>
        <div class="row no-gutters ">
          <div
            class="col-md-2 d-flex justify-content-center align-items-center bg-card-history "
            style={{
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
            }}> 
            <h5 class="card-title p-4 "style={{textAlign:"center"}}>{titleCard}</h5>
          </div>
          <div className="col-md-10">
            <div className="card-body d-flex flex-row justify-content-center align-items-center" style={{textAlign:"center"}}>
              <CardDetail
                icon="0"
                nameCard="ค่าใช้จ่ายคงที่"
                outPutCard="dd"
                unitCard="บาท/ปี"
                backgroundColor="#eee"
                titleColor = "#353E3B"
                unitColor = "#353E3B"
                iconColor="#353E3B"
              />
              <CardDetail
                icon="1"
                nameCard="ค่าใช้จ่ายแปรผัน"
                outPutCard="dd"
                unitCard="บาท/ปี"
                backgroundColor="#eee"
                titleColor = "#353E3B"
                unitColor = "#353E3B"
                iconColor="#353E3B"
              />
              <CardDetail
                icon="2"
                nameCard="รายรับจากการรับจ้างเก็บเกี่ยว"
                outPutCard="dd"
                unitCard="บาท/ปี"
                backgroundColor="#353E3B"
                titleColor = "#eee"
                unitColor = "#eee"
                iconColor="#eee"
              />
              <CardDetail
                icon="3"
                nameCard="ระยะเวลาคืนทุน"
                outPutCard="dd"
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
