import React from "react";
import "../assets/css/CardHistoryRice.css";
import CardDetail from "../components/CardDetail";
import "../assets/css/Home.css";
import {NumberFormat} from "../utils/Function"
 
function CardHistoryCane(props) {
  const {titleCard, procressObject} = props

  return (
    <div >
      <div
        class="card mb-3 col-lg-9 col-md-12 col-sm-12 backGround "
        style={{ maxWidth: "1200px", borderRadius: "25px" }}>
        <div class="row no-gutters">
          <div
            class="col-sm-6 col-lg-2 col-md-2 d-flex justify-content-center align-items-center bg-card-history "
            style={{
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
            }}> 
            <h4 class="font card-title p-4 "style={{textAlign:"center"}}>{titleCard}</h4>
          </div>
          <div className="col-md-10 ">
            <div className="card-body d-flex flex-row justify-content-center align-items-center" style={{textAlign:"center"}}>
              <CardDetail
                icon="1"
                nameCard="รายจ่าย"
                // outPutCard={NumberFormat(procressObject["expenses"])}
                outPutCard={procressObject["expenses"]}

                unitCard="บาท/ปี"
                backgroundColor="#FFD571"
                titleColor = "#353E3B"
                unitColor = "#353E3B"
                iconColor="#353E3B"
              />
              <CardDetail
                icon="2"
                nameCard="รายได้"
                // outPutCard={NumberFormat(procressObject["income"])}
                outPutCard={procressObject["income"]}

                unitCard="บาท/ปี"
                backgroundColor="#D6F8B8"
                titleColor = "#353E3B"
                unitColor = "#353E3B"
                iconColor="#353E3B"
              />
              <CardDetail
                icon="3"
                nameCard="คุ้มทุน"
                // outPutCard={NumberFormat(procressObject["years"])}
                outPutCard={procressObject["years"]}

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

export default CardHistoryCane;
