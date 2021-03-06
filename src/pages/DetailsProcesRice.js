import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RICE_STATE, riceState } from "../redux/reducers/valueRiceReducer";
import "../assets/css/ProcessRice.css";
import { NumberFormat } from "../utils/Function";

import CardProRice from "../components/CardProRice.js";
import Chart from "react-apexcharts";

function DetailsProcesRice() {
  const rice1 = useSelector(riceState(RICE_STATE.RICE1));
  const rice2 = useSelector(riceState(RICE_STATE.RICE2));
  const rice3 = useSelector(riceState(RICE_STATE.RICE3));
  const processRice = useSelector(riceState(RICE_STATE.PROCESSRICE));

  const { mc, tsa, p, s, y, i } = rice1;
  const { la, fa, fc, ja, oa, oc, ol, t, e, g } = rice2;
  const { af, wf, as, ws, w } = rice3;
  const { fixedCost, h, v, payBackPeriod } = processRice;

  const [option, setOption] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "0",
        "500",
        "1,000",
        "1,500",
        "2,000",
        "2,500",
        "3,000",
        "3,500",
      ],
    },
    title: {
      text: "ความสัมพันธ์ระหว่างรายรับจากการเก็บเกี่ยวข้าวและระยะเวลาคืนทุน",
      align: "left",
    },
    yaxis: {
      title: {
        text: "ค่าใช่จ่าย (บาท/ปี)",
      },
    },
    xaxis: {
      title: {
        text: "พื้นที่เก็บเกี่ยว (ไร่/ปี)",
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "ราคาเวลาคืนทุน",
      data: ["200,000", "300,000", "400,000", "500,000", "600,000", "700,000", "800,000", "900,000"],
    },
  ]);

  useEffect(() => {
    const A = [
      "0",
      "500",
      "1,000",
      "1,500",
      "2,000",
      "2,500",
      "3,000",
      "3,500",
    ];
    // const [datas, setDatas] = useState(["200,000", "300,000", "400,000", "500,000", "600,000", "700,000", "800,000", "900,000", "1,000,000" ])
    // var  datas = [];
    // for (i = 0; i < A.length; i++) {
    //   datas[i] = `"${
    //     ((p - s) / y + i + g) * p +
    //     (la * (af + as) +
    //       ja * (af + as) +
    //       fa * fc * (af + as) +
    //       (ol / oa) * oc * (af + as) +
    //       mc * (af * as)) *
    //       A[i]
    //   }"`;
    // }

    setOption({
      chart: {
        id: "basic-bar",
        background: "#fff",
      },
      xaxis: {
        categories: [
          "0",
          "500",
          "1,000",
          "1,500",
          "2,000",
          "2,500",
          "3,000",
          "3,500",
        ],
      },
    });

    setSeries([
      {
        name: "ราคาเวลาคืนทุน",
        data: ["200,000", "300,000", "400,000", "500,000", "600,000", "700,000", "800,000", "900,000" ],

        title: {
          text: "Price",
        },
      },
    ]);
  }, [series, option]);

  return (
    <div className="bg-process pb- ">
      <div className="card-header text-center backGround col-sm-12  mb-4 mt-0">
        <h3 className="font ml-1 second-cl">
          การประมวณผลความคุ้มค่าในการใช้งาน
        </h3>
        <h3 className="font ml-1">เครื่องเกี่ยวนวดข้าว</h3>
      </div>
      <div className="container-fluid d-flex flex-roww justify-content-around align-items-center">
        <div className="col-5 ">
          {/* <img
            src="https://sites.google.com/site/5855400298suphansaamowech/_/rsrc/1447478450853/bunny-firming-cream/%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F.png"
            class="img-fluid"
            alt="graph process"
          ></img> */}
          <Chart options={option} series={series} type="line" width="600" />
        </div>

        <div className="col-6 row">
          <div class="col">
            <CardProRice
              icon="3"
              nameCard="ระยะเวลาคืนทุน"
              // priceProcess={454}
              priceProcess={payBackPeriod}
              unitCard="ปี"
            />
          </div>
          <div class="col mb-4">
            <CardProRice
              icon="0"
              nameCard="ค่าใช้จ่ายคงที่"
              // priceProcess={444}
              priceProcess={fixedCost}
              unitCard="บาท/ปี"
            />
          </div>
          <div class="w-100"></div>
          <div class="col">
            <CardProRice
              icon="2"
              nameCard="รายรับจากการเก็บเกี่ยวข้าว"
              priceProcess={h}
              // priceProcess={444}
              unitCard="บาท/ปี"
            />
          </div>
          <div class="col">
            <CardProRice
              icon="1"
              nameCard="ค่าใช้จ่ายแปรผัน"
              priceProcess={v}
              // priceProcess={4545}
              unitCard="บาท/ปี"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-roww justify-content-around align-items-center row pb-4 mt-5">
        <div className="col-5">
          <div className="card font">
            <div
              class="card-header shadow text-white"
              style={{ backgroundColor: "#B3B842" }}
            >
              ค่าใช้จ่ายคงที่
            </div>
            <div class="card-body row">
              <div className="col-6" style={{ fontWeight: "bold" }}>
                ชื่อ
              </div>
              <div className="col-6 text-right" style={{ fontWeight: "bold" }}>
                บาท/ปี
              </div>

              <div className="col-6">ค่าเสื่อม</div>
              <div className="col-6 text-right">
                {NumberFormat((p - s) / y)}{" "}
              </div>
              <div className="col-6">ค่าดอกเบื้ย</div>
              <div className="col-6 text-right">
                {NumberFormat(((p - s) / 2) * (i / 100))}{" "}
              </div>
              <div className="col-6">ค่าโรงเก็บเครื่อง</div>
              <div className="col-6 text-right">{NumberFormat(g)} </div>
              <div className="col-6">ค่าภาษี/ประกัน</div>
              <div className="col-6 text-right">{NumberFormat(t)} </div>
              <div className="col-6">ค่าใช้จ่านอื่นๆ</div>
              <div className="col-6 text-right">{NumberFormat(e)} </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          {" "}
          <div className="card font">
            <div
              class="card-header text-white"
              style={{ backgroundColor: "#B3B842" }}
            >
              ค่าใช้จ่ายแปรผัน
            </div>
            <div class="card-body row">
              <div className="col-6" style={{ fontWeight: "bold" }}>
                ชื่อ
              </div>
              <div className="col-6 text-right" style={{ fontWeight: "bold" }}>
                บาท/ปี
              </div>
              <div className="col-6">ค่าคนขับและดูแลเครื่อง</div>
              <div className="col-6 text-right">
                {NumberFormat(la * (af + as))}{" "}
              </div>
              <div className="col-6">ค่านายหน้า</div>
              <div className="col-6 text-right">
                {NumberFormat(ja * (af + as))}
              </div>
              <div className="col-6">ค่าน้ำมันเชื้อเพลิง</div>
              <div className="col-6 text-right">
                {NumberFormat(fa * fc * (af + as))}{" "}
              </div>
              <div className="col-6">ค่าน้ำมันเครื่อง</div>
              <div className="col-6 text-right">
                {NumberFormat((ol / oa) * oc * (af + as))}{" "}
              </div>
              <div className="col-6">ค่าซ่อมแซมและบำรุงรักษา</div>
              <div className="col-6 text-right">
                {NumberFormat(mc * (af + as))}{" "}
              </div>
              <div className="col-6">ค่าขนย้ายเครื่อง</div>
              <div className="col-6 text-right">
                {NumberFormat(tsa * (af + as))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProcesRice;
