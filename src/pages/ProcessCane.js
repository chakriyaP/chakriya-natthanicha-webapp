import React, { useState, useEffect } from "react";
import "../assets/css/ProcessCane.css";
import Dropdown from "../components/Dropdown";
import InputForm, { FormInputDisabled } from "../components/FormInput.js";
import ButtonForForm from "../components/ButtonForForm.js";

import {
  MultiColorProgressBar,
  MultiColorProgressBarSmall,
} from "../components/MultiColorProgressBar";
import { CradProCane } from "../components/CradProCane";
import { useHistory } from "react-router-dom";
import { NumberFormat } from "../utils/Function";

// import {MultiColorProgressBar} from "../components/CustomProgressBar"

const ProcessCane = () => {
  let history = useHistory();

  const [factory, setFactoryName] = useState([]);
  const [caneBurning, setCaneBurning] = useState();
  // value from slieder
  const [conversionLength, setConversionLength] = useState(1); //ความยาวแปรง
  const [barrier, setBarrier] = useState(1); //หิน
  const [product, setProduct] = useState(12.5); //ผลผลิต
  const [wages, setWages] = useState(190); //ค่าจ่าง
  const [workload, setWorkload] = useState(12000); //ปริมาณ

  const [wagesReadings, setWagesReadings] = useState([
    {
      value: 33.33,
      color: "#4AEC7B",
    },
    {
      value: 33.33,
      color: "#FFD571",
    },
    {
      value: 33.33,
      color: "#FF5200",
    },
  ]);

  const [workloadReadings, setWorkloadReadings] = useState([
    {
      value: 33.33,
      color: "#4AEC7B",
    },
    {
      value: 33.33,
      color: "#FFD571",
    },
    {
      value: 33.33,
      color: "#FF5200",
    },
  ]);

  // const test = () => {
  //   var valueDefault = JSON.parse(sessionStorage.getItem("valueDeault"));

  //   let widthArea = conversionLength * valueDefault["b"];
  //   let stone = barrier * valueDefault["b"];
  //   let YE = product * valueDefault["b"];

  //   let wagesWork = 190 * widthArea * stone * product;
  //   let wagesWorkMax = wagesWork + wagesWork * 0.05;
  //   let wagesWorkMin = wagesWork - wagesWork * 0.05;

  //   let workSum = valueDefault["P"] / wagesWork;
  //   let workSumMax = workSum + workSum * 0.1;
  //   let workSumMin = workSum - workSum * 0.1;
  //   setWorkload(valueDefault["P"] / wagesWork);
  //   let D = (valueDefault["P"] - valueDefault["S"]) / valueDefault["Y"];
  //   let IT =
  //     [(valueDefault["P"] - valueDefault["S"]) / 2] * [valueDefault["I"] / 100];
  //   let L = valueDefault["LA"] / (YE / 12);
  //   let F = (valueDefault["FA"] / (YE / 12)) * valueDefault["FC"] * YE;
  //   let M1 = (valueDefault["M"] / (YE / 12)) * YE;

  //   let V =
  //     L +
  //     valueDefault["J"] +
  //     F +
  //     valueDefault["O"] +
  //     valueDefault["M"] +
  //     valueDefault["TS"];

  //   setExpenses(
  //     D + IT + valueDefault["G"] + valueDefault["T"] + valueDefault["E"] + V
  //   );
  //   setIncome(workload * wages);
  //   setYears(valueDefault["P"] / income);
  // };

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

  let produceReadings = [
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

  // let meanWages = 0;
  const [meanWages, setMeanWages] = useState(190);
  const [highMeanWages, setHighMeanWages] = useState(48.32);
  const [mediumMeanWages, setMediumMeanWages] = useState(15.2);
  const [lowMeanWages, setLowMeanWages] = useState(24.4);
  const [sumMeanWages, setSumMeanWages] = useState(0);

  // const check

  useEffect(() => {
    setMeanWages(190 * conversionLength * barrier * (product / 12.5));

    setHighMeanWages(Math.abs((275 - meanWages * 1.05) * 0.8)); //48.32
    setMediumMeanWages(Math.abs((meanWages * 1.05 - meanWages * 0.95) * 0.8)); //15.2
    setLowMeanWages(Math.abs((meanWages * 0.95 - 150) * 0.8)); //24.4
    setSumMeanWages(highMeanWages + mediumMeanWages + lowMeanWages); //87.92

    setWagesReadings([
      {
        value: (100 * highMeanWages) / sumMeanWages,
        color: "#4AEC7B", //เขียว
      },
      {
        value: (100 * mediumMeanWages) / sumMeanWages,
        color: "#FFD571", //เหลือง
      },
      {
        value: (100 * lowMeanWages) / sumMeanWages,
        color: "#FF5200", //แดง
      },
    ]);
  }, [conversionLength, barrier, product, meanWages]);

  const [work, setWork] = useState(12000);
  const [highWork, setHighWork] = useState(28.94356006);
  const [mediumWork, setMediumWork] = useState(34.73227207);
  const [lowWork, setLowWork] = useState(24.4);
  const [sumWork, setSumWork] = useState(0);

  useEffect(() => {
    setWork(2280000 / wages);

    setHighWork(Math.abs(((15200 - work * 1.1) * 100) / 6910));
    setMediumWork(Math.abs(((work * 1.1 - work * 0.9) * 100) / 6910));
    setLowWork(Math.abs(((work * 0.9 - 8290) * 100) / 6910));
    setSumWork(highWork + mediumWork + lowWork);

    setWorkloadReadings([
      {
        value: (100 * highWork) / sumWork,
        color: "#4AEC7B",
      },
      {
        value: (100 * mediumWork) / sumWork,
        color: "#FFD571",
      },
      {
        value: (100 * lowWork) / sumWork,
        color: "#FF5200",
      },
    ]);
  }, [wages]);

  const [expenses, setExpenses] = useState(1202307.92);
  const [income, setIncome] = useState(2280000.0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    //    fetch(
    //   `https://asia-east2-webapp-project-78b5f.cloudfunctions.net/api/valuesDefault`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   })
    //   .catch((err) => console.log(err));
    var valueDefault = JSON.parse(sessionStorage.getItem("valueDeault"));
    let D = (valueDefault["P"] - valueDefault["S"]) / valueDefault["Y"];
    let IT =
      [(valueDefault["P"] - valueDefault["S"]) / 2] * [valueDefault["I"] / 100];
    let L = valueDefault["LA"] / (product / 12);
    let F =
      (valueDefault["FA"] / (product / 12)) * valueDefault["FC"] * product;
    let M = (valueDefault["M"] / (product / 12)) * product;

    let V =
      L + valueDefault["J"] + F + valueDefault["O"] + M + valueDefault["TS"];

    setExpenses(
      D + IT + valueDefault["G"] + valueDefault["T"] + valueDefault["E"] + V
    );
    setIncome(workload * wages);

    setYears((valueDefault["P"] - valueDefault["S"]) / (income - expenses));

    // - IT - valueDefault["G"] - valueDefault["T"] - valueDefault["E"] - V
  }, [conversionLength, barrier, product, wages, workload, meanWages]);

  const eiditValue = () => {
    history.push("/chakriya-natthanicha-webapp/cane");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let procress = { expenses, income, years };
    let countProcrseeCane = localStorage.getItem("countProcrseeCane");
    window.localStorage.setItem(
      `${countProcrseeCane}procress`,
      JSON.stringify(procress)
    );

    window.localStorage.setItem(`countProcrseeCane`, +countProcrseeCane + 1);
    history.push("/chakriya-natthanicha-webapp/histotyCane");
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/home");
  };

  return (
    <div className="bg d-flex justify-content-center align-items-center row font">
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
              <samp className="font second-cl ml-1">เครื่องตัดอ้อย</samp>
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
                  <ins>
                    <a onClick={eiditValue}>แก้ไข้ตัวแปร</a>
                  </ins>
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
                      nameLable="ความยาวแปลง(เมตร)"
                      valueDefault={1}
                      maxValue="เล็ก"
                      mdValue="กลาง"
                      minValue="ใหญ่"
                      max="1.1"
                      min="0.9"
                      step={0.1}
                      onSliderChange={(value) => {
                        setConversionLength(value);
                      }}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <MultiColorProgressBarSmall
                      readings={fixRange}
                      scale={2}
                      nameLable="     ปริมาณของ หิน/ตอไม้ "
                      valueDefault={1}
                      maxValue="มาก"
                      mdValue="กลาง"
                      minValue="น้อย"
                      max="1.2"
                      min="1.0"
                      step={0.1}
                      onSliderChange={(value) => {
                        setBarrier(value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-5 mt-3">
                  <MultiColorProgressBar
                    readings={produceReadings}
                    scale={4}
                    nameLable="ผลผลิต"
                    valueDefault={12.5}
                    maxValue="5 ตัน/ปี"
                    minValue="20 ตัน/ปี"
                    max="20"
                    min="5"
                    step={0.5}
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
                    readings={wagesReadings}
                    scale={4}
                    nameLable="ค่าจ้าง "
                    valueDefault={190}
                    maxValue="275 บาท/ตัน"
                    minValue="150 บาท/ตัน"
                    max="275"
                    min="150"
                    onSliderChange={(value) => {
                      setWages(value);
                    }}
                  />
                </div>

                <div className="col-6 mt-3">
                  <MultiColorProgressBar
                    readings={workloadReadings}
                    scale={4}
                    nameLable="ปริมาณงาน"
                    valueDefault={12000}
                    maxValue="15,200 ตัน/ปี"
                    minValue="8,290 ตัน/ปี"
                    max="15200"
                    min="8290"
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
                      valuePro={NumberFormat(expenses)}
                      unit={"บาท/ปี"}
                    />
                  </div>
                  <div className="col-12 p-1">
                    <CradProCane
                      nameLable="รายได้"
                      fristColor="#BEF091"
                      seconeColor="#D6F8B8"
                      valuePro={NumberFormat(income)}
                      unit={"บาท/ปี"}
                    />
                  </div>
                  <div className="col-12 p-1">
                    <CradProCane
                      nameLable="คุ้มทุน"
                      fristColor="#858585"
                      seconeColor="#B7B6B7"
                      valuePro={NumberFormat(years)}
                      unit={"ปี"}
                    />
                  </div>
                </div>
              </div>
              
              {/* <a>
                <ins>ดูประวัติการคำนวณ </ins>{" "}
              </a> */}
            </div>
          </div>
          <div className=" col-12  d-flex align-items-center justify-content-center mb-4">
            <form className="col-12 d-flex align-items-center justify-content-center" onSubmit={handleSubmit} onReset={handleReset} >
              <ButtonForForm namePer="ย้อนกลับ" nameNext="บันทึก" />
            </form>
          </div>

          {/* <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center mb-5">
                <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป" />
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProcessCane;
