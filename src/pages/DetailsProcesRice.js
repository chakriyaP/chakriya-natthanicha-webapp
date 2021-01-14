import React ,{ useState, useEffect }from "react";
import "../assets/css/ProcessRice.css";
import CardProRice from "../components/CardProRice.js";
import Chart from "react-apexcharts";

function DetailsProcesRice() {
   
    const [option, setOption] = useState({
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      })
    const [series, setSeries] = useState([
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ])
    useEffect(() => {
        setOption({
            chart: {
              id: "basic-bar",
              background: '#fff',
             
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1999]
            }
          })
    
          setSeries([
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ])
    }, [])
    
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
          <Chart
            options={option}
            series={series}
            type="line"
            width="500"
          />
        </div>

        <div className="col-6 row">
          <div class="col">
            <CardProRice
              icon="3"
              nameCard="ระยะเวลาคืนทุน"
              priceProcess={454}
              // priceProcess={NumberFormat(payBackPeriod)}
              unitCard="ปี"
            />
          </div>
          <div class="col mb-4">
            <CardProRice
              icon="0"
              nameCard="ค่าใช้จ่ายคงที่"
              priceProcess={444}
              // priceProcess={fixedCost}
              unitCard="บาท/ปี"
            />
          </div>
          <div class="w-100"></div>
          <div class="col">
            <CardProRice
              icon="2"
              nameCard="รายรับจากการเก็บเกี่ยวข้าว"
              // priceProcess={NumberFormat(h)}
              priceProcess={444}
              unitCard="บาท/ปี"
            />
          </div>
          <div class="col">
            <CardProRice
              icon="1"
              nameCard="ค่าใช้จ่ายแปรผัน"
              // priceProcess={NumberFormat(v)}
              priceProcess={4545}
              unitCard="บาท/ปี"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-roww justify-content-around align-items-center row pb-4 mt-5">
        <div className="col-5">
          <div className="card font" style={{ borderRadius: "25px" }}>
            <div class="card-header">ค่าใช้จ่ายคงที่</div>
            <div class="card-body row">
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
            </div>
          </div>
        </div>
        <div className="col-5">
          {" "}
          <div className="card font" style={{ borderRadius: "25px" }}>
            <div class="card-header">ค่าใช้จ่ายคงที่</div>
            <div class="card-body row">
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
              <div className="col-6">ค่าเสื่อมราคา</div>
              <div className="col-6 text-right">5000 บาท/ปี</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProcesRice;
