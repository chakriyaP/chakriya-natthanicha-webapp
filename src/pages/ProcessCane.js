import React, { useState } from "react";
import "../assets/css/InputSlider.css";
import Dropdown from "../components/Dropdown";
import InputForm, { FormInputDisabled } from "../components/FormInput.js";
import {
  MultiColorProgressBar,
  MultiColorProgressBarSmall,
} from "../components/MultiColorProgressBar";
import { CradProCane } from "../components/CradProCane";
import { useHistory } from "react-router-dom";

// import {MultiColorProgressBar} from "../components/CustomProgressBar"

const ProcessCane = () => {
  let history = useHistory();

  const [factory, setFactoryName] = useState([]);
  const [caneBurning, setCaneBurning] = useState();
  // value from slieder
  const [conversionLength, setConversionLength] = useState();
  const [barrier, setBarrier] = useState();
  const [product, setProduct] = useState();
  const [wages, setWages] = useState();
  const [workload, setWorkload] = useState();

  const P = 11722632; //ราคาคันรถ
  const b = 1; //default สูตรสไลค์
  const G = 0; //ค่าโรงเก็บเครื่อง 
  const T = 40865; //ค่าภาษี/ประกัน 
  const E = 0; //ค่าใช้จ่ายอื่นๆ
  const J = 0;//ค่านายหน้า
  const O = 0;//ค่าน้ำมันเครื่อง
  const TS = 0;//ค่าขนย้ายเครื่อง 
  const S = 1172263;//ค่าซากที่คิดว่าจะขายได้
  const I = 2;//ดอกเบี้ย
  const Y = 10;//อายุใช้งาน
  const FA = 2.28;//อัตราสิ้นเปลืองน้ำมัน
  const LA = 9.93;//ค่าคนขับเครื่อง
  const M = 26.52;//ซ่อม
  const FC = 21;//น้ำมันจริงๆต้องดึง api
  const valueDeault = {P, G, T, E, J, O, TS, S, I , Y, FA, LA, M , FC}

  sessionStorage.setItem("valueDeault", JSON.stringify(valueDeault));


  let widthArea = conversionLength * b;
  let stone = barrier * b;
  let YE = product * b;

  let wagesWork = 190 * widthArea * stone * product;
  let wagesWorkMax = wagesWork + wagesWork * 0.05;
  let wagesWorkMin = wagesWork - wagesWork * 0.05;

  let workSum = P / wagesWork;
  let workSumMax = workSum + workSum * 0.1;
  let workSumMin = workSum - workSum * 0.1;

  let D =  (P - S)/ Y
  let IT = [(P - S) / 2] * [I / 100];
  let L = LA / (YE / 12)
  let F = (FA / (YE / 12)) * FC * YE; 
  let M1 = M/(YE/12)* YE;

  let V = L + J + F + O + M + TS;

  let expenses = D + IT + G + T + E + V; //รายจ่าย
  let income = workSum * wagesWork; //รายได้
  let years = P / income; //คุ้มทุน

  // console.log(conversionLength);

  let productRange = [
    { value: 70, color: "#D6F8B8" }, //greee
    { value: 20, color: "#eb4d4b" },
    { value: 10, color: "#eb4d4b" },
  ];

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
      value: 70,
      color: "#4AEC7B",
    },
    {
      value: 20,
      color: "#FFD571",
    },
    {
      value: 10,
      color: "#FF5200",
    },
  ];

  let fixRange = [
    {
      value: 33.33,
      color: "#413D35",
    },
    {
      value: 33.33,
      color: "#847D6D",
    },
    {
      value: 33.33,
      color: "#BFB7A5",
    },
  ];

  const eiditValue = () => {
    history.push("/chakriya-natthanicha-webapp/cane");

  }

  return (
    <div className="bg-img d-flex justify-content-center align-items-center row font">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
        <div
          className="card br-5 p-3"
          style={{ backgroundColor: "RGBA(255,255,255,0.9)" }}
        >
          <div
            className="card-header text-center "
            style={{ backgroundColor: "transparent" }}
          >
            <h3>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
            </h3>
          </div>
          <div
            className="card-body d-flex flex-column align-items-center row  p-3"
            // style={{ backgroundColor: "RGBA(255,255,255,0.43)" }}
          >
            <div className="col-12 row">
              <div className="col-6 ">
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
                  <ins><a onClick={eiditValue}>แก้ไข้ตัวแปร</a></ins>
                </p>
              </div>
            </div>
            <div className="col-12 row mt-2 d-flex justify-content-between">
              <div
                className="col-5 row d-flex justify-content-around shadow-lg"
                style={{ backgroundColor: "#FFCC96", borderRadius: 20 }}
              >
                <div
                  className="col-12 text-center p-2 shadow-sm"
                  style={{
                    fontSize: "1.25em",
                    backgroundColor: "#FFBA71",
                    width: "100%",
                  }}
                >
                  ข้อมูลรายจ่าย
                </div>
                <div className="col-7 mt-3 row p-2">
                  <div className="col-12">
                    <MultiColorProgressBarSmall
                      readings={fixRange}
                      scale={2}
                      nameLable="ความยาวแปลง ( เมตร )"
                      valueDefault={1.1}
                      maxValue="ใหญ่"
                      mdValue="กลาง"
                      minValue="เล็ก"
                      max="1.1"
                      min="0.9"
                      step={0.01}
                      onSliderChange={(value) => {
                        setConversionLength(value);
                      }}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <MultiColorProgressBarSmall
                      readings={fixRange}
                      scale={2}
                      nameLable="   ปริมาณของ หิน / ตอไม้ "
                      valueDefault={1.1}
                      maxValue="มาก"
                      mdValue="กลาง"
                      minValue="น้อย"
                      max="1.2"
                      min="0.1"
                      step={0.01}
                      onSliderChange={(value) => {
                        setBarrier(value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-5 mt-3">
                  <MultiColorProgressBar
                    readings={readings}
                    scale={4}
                    nameLable="ผลผลิต"
                    valueDefault={190}
                    maxValue="20 ตัน/ปี"
                    minValue="5 ตัน/ปี"
                    max="20"
                    min="5"
                    onSliderChange={(value) => {
                      setProduct(value);
                    }}
                  />
                </div>
              </div>

              <div
                className="col-4 row d-flex justify-content-around shadow-lg"
                style={{ backgroundColor: "#D6F8B8", borderRadius: 20 }}
              >
                <div
                  className="text-center p-2 shadow-sm"
                  style={{
                    fontSize: "1.25em",
                    backgroundColor: "#BEF091",
                    width: "100%",
                  }}
                >
                  ข้อมูลรายได้
                </div>
                <div className="col-6 mt-3">
                  <MultiColorProgressBar
                    readings={readings}
                    scale={4}
                    nameLable="ค่าจ้าง"
                    valueDefault={190}
                    maxValue="240 บาท/ไร่"
                    minValue="170 บาท/ไร่"
                    max="240"
                    min="170"
                    onSliderChange={(value) => {
                      setWages(value);
                    }}
                  />
                </div>

                <div className="col-6 mt-3">
                  <MultiColorProgressBar
                    readings={readings}
                    scale={4}
                    nameLable="ปริมาณงาน"
                    valueDefault={12.5}
                    maxValue="20 ตัน/ปี"
                    minValue="5 ตัน/ปี"
                    max="20"
                    min="5"
                    onSliderChange={(value) => {
                      setWorkload(value);
                    }}
                  />
                </div>
              </div>

              <div
                className="col-3 row d-flex justify-content-around bg-white"
                style={{ backgroundColor: "#D6F8B8", borderRadius: 20 }}
              >
                <div
                  className="text-center  mb-2 shadow-sm "
                  style={{
                    fontSize: "1.25em",
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                >
                  ประมวลผล
                </div>
                <div className="col-12 ">
                  <div className="col-12 p-1 ">
                    <CradProCane
                      nameLable="รายจ่าย"
                      fristColor="#FFBA71"
                      seconeColor="#FFCC96"
                      valuePro={"1500"}
                      unit={"บาท/ปี"}
                    />
                  </div>
                  <div className="col-12 p-1">
                    <CradProCane
                      nameLable="รายได้"
                      fristColor="#BEF091"
                      seconeColor="#D6F8B8"
                      valuePro={"15,000"}
                      unit={"บาท/ปี"}
                    />
                  </div>
                  <div className="col-12 p-1">
                    <CradProCane
                      nameLable="คุ้มทุน"
                      fristColor="#858585"
                      seconeColor="#B7B6B7"
                      valuePro={"5"}
                      unit={"ปี"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCane;
