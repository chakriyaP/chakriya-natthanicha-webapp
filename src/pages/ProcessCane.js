import React from "react";
import "../assets/css/InputSlider.css";
import Dropdown from "../components/Dropdown";

import InputSlider from "../components/InputSlider";

const ProcessCane = (region) => {
  fetch(
    `https://asia-east2-webapp-project-78b5f.cloudfunctions.net/api/sugarcaneBurningArea/${region}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// ProcessCane("northeast");

  return (
    <div className="bg-img d-flex justify-content-center align-items-center row font">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div className="card br-5">
          <div className="card-header text-center">
            <h3>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
            </h3>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
            <div className="col-10">
              <Dropdown
                nameLable="ภูมิภาค"
                optionLabal="เลือกภูมิภาค"
                options={["ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออกเฉียงเหนือ"]}
                //   onSelected={hendleSelected}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCane;
