import React from "react";

import CardHistoryCane from "../components/CardHistoryCane";
import "../assets/css/CardHistoryRice.css";
import Footer from "../components/Footer";
import { NumberFormat } from "../utils/Function";

function HistotyCane() {
  const randerProcess = () => {
    console.log(localStorage.getItem("countProcrseeCane"));
    let CardHistoryRiceTmp = [];
    for (let i = 0; i < localStorage.getItem("countProcrseeCane"); i++) {
      let titleCardTmp = `ประมวลผลครั้งที่ ${i + 1}`;
      CardHistoryRiceTmp.push(
        <CardHistoryCane
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
          <h1 className="font second-cl ml-1 ">
            ประวัติ
            <span className="font ml-1 text-dark ">การคำนวณความคุ้มค่า</span>
          </h1>
          <h2 className="font ml-1 ">
            ในการใช้งาน
            <span className="font second-cl ml-1 ">รถตัดอ้อย</span>
          </h2>
        </div>


        {localStorage.getItem("countProcrseeCane") == 0 ? (
        <div className="container-fluid  d-flex justify-content-center align-items-center row p-4">
          {" "}
          <div
            className="col-4 p-4 bg-light Light d-flex justify-content-center align-items-center font"
            style={{ borderRadius: "25px" }}
          >
            <h3>ไม่มีประวัติการคำนวณ</h3>{" "}
          </div>
        </div>
      ) : (
        <div class="d-flex flex-column justify-content-center align-items-center ">
          {randerProcess()}
        </div>
      )}
      </div>
  
  );
}

export default HistotyCane;
