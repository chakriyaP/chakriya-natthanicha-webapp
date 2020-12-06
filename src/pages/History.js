import React from "react";
import CardHistoryRice from "../components/CardHistoryRice";
import CardHistoryCane from "../components/CardHistoryCane";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";
import "../assets/css/CardHistoryRice.css";

export default function history() {
  return (
    <div className = "historyPage ">
      <div className=" card-header text-center col-sm-12  mb-4 mt-2  backGround">
            <h2 className="font second-cl ml-1 ">ประวัติ<span className="font ml-1 text-dark ">การคำนวณความคุ้มค่า</span></h2>
            <h3 className="font ml-1 ">ในการใช้งาน<span className="font second-cl ml-1 ">เครื่องเกี่ยวนวดข้าว</span></h3>
      </div>
      <div  class="d-flex flex-column justify-content-center align-items-center ">
      {/* <CardHistoryRice 
        titleCard="ประมวลผลครั้งที่ 1"
      /> */}
      <CardHistoryRice
        titleCard="ประมวลผลครั้งที่ 2"
      />
      <CardHistoryRice 
        titleCard="ประมวลผลครั้งที่ 3"
      />
      <CardHistoryCane
        titleCard="ประมวลผลครั้งที่ 1"
      />
      <Footer/>

      </div>
      
    </div>
  );
}
