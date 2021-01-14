import React, { useState, useEffect } from "react";
import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { riceAction } from "../redux/actions/rice-action";
import Footer from "../components/Footer";
import "../assets/css/FirstFormCane.css";

function SecondFormRice() {
  const [rice2, setRice2] = useState({});
  const dispatch = useDispatch();
  const [disel, setDisel] = useState(0);

  let history = useHistory();

  const getOilPrice = () => {
    fetch(`https://www.bangchak.co.th/api/oilprice`)
      .then((response) => response.text())
      .then((str) => {
        var parseString = require("xml2js").parseString;
        parseString(str, function (err, result) {
          result.header.item.forEach((element) => {
            if (element.type == "HI DIESEL B20 S") {
              setDisel(element.today);
            }
          });
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOilPrice();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(riceAction.setRice2(rice2));

    // คำนวณ ...\

    //เปลี่ยนไปหน้าถัดไป
    history.push("/chakriya-natthanicha-webapp/rice3");
  };

  // เอาค่าที่ได้จาก form ไปเก็บไว้
  const handleChange = (e) => {
    setRice2({
      ...rice2,
      [e.target.name]: +e.target.value.replace(/,/g, ""),
    });
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/rice");
  };

  // log ดูค่าที่ได้จากการเก็บเเฉยๆ เวลาค่ามันเปลี่ยน
  // useEffect(() => {
  //   console.log("rice2", rice2);
  // }, [rice2]);

  return (
    <div className="bg-img d-flex justify-content-center align-items-center row font  ml-0 mr-0">
      <div className="col-xs-12 col-sm-12 col-md-11 col-lg-8 mt-5 mb-5">
        <div className="card primary-bg " style={{ borderRadius: "40px" }}>
          <div className="bg-form card-header text-center p-4 " style={{ borderTopLeftRadius: "40px",borderTopRightRadius:"40px" }}>
            <h2>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
            </h2>
          </div>
          <div className="card-body d-flex flex-column align-items-center row">
            <StatusBar status="2" />
            <div className="mt-4 mb-3">
              <h4 className="text-center">ข้อมูลค่าใช้จ่าย</h4>
            </div>
          </div>
          <form
            className="mr-0 ml-0"
            id="seconeFormRice"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <InputForm
              nameLable="ค่าคนขับและคนดูแลเครื่อง"
              nameInput="la"
              placeholder="50"
              unit="บาท/ไร่"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="อัตราการใช้น้ำมันเชื้อเพลิง"
              nameInput="fa"
              placeholder="50"
              unit="ลิตร/ไร่"
              onChange={handleChange}
            />
            <InputForm
              nameLable="ราคาน้ำมันเชื้อเพลิง ( ราคาน้ำมันขายปลีก HI DIESEL B20 S จากบางจาก)"
              nameInput="fc"
              placeholder="25"
              unit="บาท/ลิตร"
              value={+disel}
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="ค่านายหน้า"
              nameInput="ja"
              placeholder="50"
              unit="บาท/ไร่"
              onChange={handleChange}
            />
            <InputForm
              nameLable="รอบการเปลี่ยนน้ำมันเครื่องทุกการใช้งานกี่ไร่"
              nameInput="oa"
              placeholder="100"
              unit="ไร่"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="จำนวนน้ำมันเครื่องที่ต้องการเปลี่ยนในแต่ละครั้ง"
              nameInput="ol"
              placeholder="50"
              unit="ลิตร"
              onChange={handleChange}
            />
            <InputForm
              nameLable="ราคาน้ำมันเครื่อง"
              nameInput="oc"
              placeholder="30"
              unit="บาท/ลิตร"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="ค่าโรงเก็บเครื่อง"
              nameInput="g"
              placeholder="1000"
              unit="บาท/ปี"
              onChange={handleChange}
            />
            <InputForm
              nameLable="ค่าภาษี/ประกัน"
              nameInput="t"
              placeholder="8000"
              unit="บาท/ปี"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="ค่าใช้จ่ายอื่นๆ"
              nameInput="e"
              placeholder="0"
              unit="บาท/ปี"
              onChange={handleChange}
            />
            <div className="card-body d-flex flex-column align-items-center ">
              <div className="col-lg-8 col-md-8 col-sm-10">
                <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SecondFormRice;
