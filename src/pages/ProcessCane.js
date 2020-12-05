import React, { useState } from "react";
import "../assets/css/InputSlider.css";
import Dropdown from "../components/Dropdown";
import InputForm, { FormInputDisabled } from "../components/FormInput.js";
import { MultiColorProgressBar } from "../components/MultiColorProgressBar";
// import {MultiColorProgressBar} from "../components/CustomProgressBar"

const ProcessCane = () => {
  const [factory, setFactoryName] = useState([]);
  const [caneBurning, setCaneBurning] = useState();

  const sugarcaneBurningArea = (region) => {
    fetch(
      `https://asia-east2-webapp-project-78b5f.cloudfunctions.net/api/sugarcaneBurningArea/${region}`
    )
      .then((response) => response.json())
      .then((data) => {
        let factorys = Object.values(data[0]).map((item) => {
          let data = {
            name: item.name,
            value: item.amount,
          };
          return data;
        });
        setFactoryName(factorys);
      })
      .catch((err) => console.log(err));
  };

  const hendleSelected = (e) => {
    let selected = e.target.value;
    sugarcaneBurningArea(selected);
  };

  const hendleSelected2 = (e) => {
    let selected = e.target.value;
    setCaneBurning(selected);
  };

  let readings = [
    {
      name: "Apples",
      value: 60,
      color: "#eb4d4b",
    },
    {
      name: "Blueberries",
      value: 25,
      color: "#22a6b3",
    },
    {
      name: "Guavas",
      value: 15,
      color: "#6ab04c",
    },
  ];

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
            <div className="col-12 row">
              <div className="col-6">
                <Dropdown
                  nameLable="ภูมิภาค"
                  optionLabal="เลือกภูมิภาค"
                  options={[
                    { value: "north", name: "ภาคเหนือ" },
                    { value: "central", name: "ภาคกลาง" },
                    { value: "east", name: "ภาคตะวันออก" },
                    { value: "northeast", name: "ภาคตะวันออกเฉียงเหนือ" },
                  ]}
                  onSelected={hendleSelected}
                />
              </div>
              <div className="col-6">
                <Dropdown
                  nameLable="ชื่อโรงงาน"
                  optionLabal="เลือกโรงงาน"
                  options={factory}
                  onSelected={hendleSelected2}
                />
              </div>
              <div className="col-6">
                <FormInputDisabled
                  nameLable="ปริมาณอ้อยที่เผา"
                  nameInput="p" //มาแก้น้าาาาาาาาาาาาาาาาาาาาาาาาาา
                  placeholder="0"
                  unit="ตัน"
                  value={caneBurning}
                />
              </div>
              <div className="d-flex flex-column-reverse col-6 mb-10">
                <p className="font second-cl">
                  <ins>แก้ไข้ตัวแปร</ins>
                </p>
              </div>
            </div>
            <div className="col-12 row ">
              
              
              <div className="col-4 bg-info">
                <div class="card border-light " style={{ maxWidth: "18rem" }}>
                  <div class="card-header">ข้อมูลรายจ่าย</div>
                  <div class="card-body">
                    <MultiColorProgressBar readings={readings} scale={3} />
                    <MultiColorProgressBar readings={readings} scale={3} />

                  </div>
                </div>
              </div>

              <div className="col-4 row">
                <MultiColorProgressBar
                  className="col-6"
                  readings={readings}
                  scale={3}
                />
                <MultiColorProgressBar
                  className="col-6"
                  readings={readings}
                  scale={3}
                />
              </div>
              <div className="col-4 bg-info">l;l;'l'</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCane;
