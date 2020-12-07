import React from 'react'

import CardHistoryCane from "../components/CardHistoryCane";
import "../assets/css/CardHistoryRice.css";
import Footer from "../components/Footer";




function HistotyCane() {
    const randerProcess = () => {
        console.log(localStorage.getItem('countProcrseeCane'));
        let CardHistoryRiceTmp = []
        for (let i = 0; i < localStorage.getItem('countProcrseeCane'); i++) {
          let titleCardTmp = `ประมวลผลครั้งที่ ${i+1}`        
          CardHistoryRiceTmp.push(<CardHistoryCane
        titleCard={titleCardTmp}
       procressObject={JSON.parse(localStorage.getItem(`${i}procress`))}/>)
    
        } 
        return CardHistoryRiceTmp
      }

    return (
        <div>
            <div className="historyPage ">
      <div className=" card-header text-center col-sm-12  mb-4 mt-2  backGround">
        <h2 className="font second-cl ml-1 ">
          ประวัติ
          <span className="font ml-1 text-dark ">การคำนวณความคุ้มค่า</span>
        </h2>
        <h3 className="font ml-1 ">
          ในการใช้งาน
          <span className="font second-cl ml-1 ">รถตัดอ้อย</span>
        </h3>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center ">
        {randerProcess()}


         {/* <CardHistoryCane
        titleCard="ประมวลผลครั้งที่ 1"
      /> */}
      {/* <Footer/> */}
      </div>
    </div>
        </div>
    )
}

export default HistotyCane
