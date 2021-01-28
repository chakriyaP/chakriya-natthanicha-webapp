import React from "react";
import CardHistoryRice from "../components/CardHistoryRice";
import CardHistoryCane from "../components/CardHistoryCane";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";
import "../assets/css/CardHistoryRice.css";
import { NumberFormat } from "../utils/Function";
  
export default function history() {
  const randerProcess = () => {
    console.log(localStorage.getItem("countProcrsee"));
    let CardHistoryRiceTmp = [];
    for (let i = 0; i < localStorage.getItem("countProcrsee"); i++) {
      let titleCardTmp = `ประมวลผลครั้งที่ ${i + 1}`;
      console.log(i);

      CardHistoryRiceTmp.push(
        <CardHistoryRice
          titleCard={titleCardTmp}
          procressObject={JSON.parse(localStorage.getItem(`${i}procress`))}
        />
      );
    }
    return CardHistoryRiceTmp;
  };

  return (
    <div className="historyPage ">
      <div className=" card-header text-center col-sm-12  mb-4 mt-2  backGround">
        <h2 className="font second-cl ml-1 ">
          ประวัติ
          <span className="font ml-1 text-dark ">การคำนวณความคุ้มค่า</span>
        </h2>
        <h3 className="font ml-1 ">
          ในการใช้งาน
          <span className="font second-cl ml-1 ">เครื่องเกี่ยวนวดข้าว</span>
        </h3>
      </div>

      {localStorage.getItem("countProcrsee") == 0 ? (
        <div className="container-fluid  d-flex justify-content-center align-items-center row p-4"> <div className="col-4 p-4 bg-light Light d-flex justify-content-center align-items-center font" style={{borderRadius: "25px"}}><h3>ไม่มีประวัติการคำนวณ</h3> </div></div>
      ) : (
        <div class="d-flex flex-column justify-content-center align-items-center ">
          {randerProcess()}
        </div>
      )}
    </div>
  );
}
