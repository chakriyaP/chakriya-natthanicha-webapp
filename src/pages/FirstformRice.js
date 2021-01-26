import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
// import SecondFormRice from "../pages/SecondFormRice.js";
import { riceAction } from "../redux/actions/rice-action";
// import { RICE_STATE, riceState } from "../redux/reducers/valueRiceReducer";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer.js";

import { useHistory } from "react-router-dom";

// import "../assets/css/FirstFormCane.css";
import "../assets/css/FirstformRice.css";

function FirstformRice() {
  const [rice1, setRice1] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();

  const region = [
    { mc: 39.58, tsa: 25.99 },
    { mc: 30.88, tsa: 25.51 },
    { mc: 41.37, tsa: 27.0 },
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(riceAction.setRice1(rice1));
    history.push("/chakriya-natthanicha-webapp/rice2");
  };

  const handleChange = (e) => {
    setRice1({
      ...rice1,
      [e.target.name]: +e.target.value.replace(/,/g, ""),
    });
  };

  const selectSetRice = (selected) => {
    setRice1({
      ...rice1,
      ["mc"]: region[selected].mc,
      ["tsa"]: region[selected].tsa,
    });
  };

  const hendleSelected = (e) => {
    let selected = e.target.value.slice(3);

    if (selected === "เหนือ") {
      selectSetRice(0);
    } else if (selected === "กลาง") {
      selectSetRice(1);
    } else {
      selectSetRice(2);
    }
  };

  //ย้อนกลับ
  const handleReset = () => {
    history.push("/chakriya-natthanicha-webapp/home");
  };

  // log ดูค่าที่ได้จากการเก็บเเฉยๆ เวลาค่ามันเปลี่ยน
  useEffect(() => {
    console.log("rice1", rice1);
  }, [rice1]);

  return (
    // <Router>
    <div className="bg-img d-flex justify-content-center align-items-center  row font  ml-0 mr-0">
      <div className="col-xs-12 col-sm-12 col-md-11 col-lg-8 mt-5 mb-5 ">
        <div className="card primary-bg " style={{ borderRadius: "40px" }}>
          <div className="bg-form card-header text-center p-4 " style={{ borderTopLeftRadius: "40px",borderTopRightRadius:"40px" }}>
            <h2>
              โปรแกรมประมาณการความคุ้มค่า
              <br></br>ในการใช้งาน
              <samp className="font second-cl ml-1">เครื่องเกี่ยวนวดข้าว</samp>
            </h2>
          </div>
          <div className="card-body d-flex flex-column align-items-center ">
            <StatusBar status="1" />
            <div className="mt-4 ">
              <h4 className="text-center">ข้อมูลทั่วไป</h4>
            </div>
          </div>
          <form
            className="mr-0 ml-0"
            id="firstFormRice"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <Dropdown
              nameLable="ภูมิภาค"
              optionLabal="เลือกภูมิภาค"
              options={[
                { name: "ภาคเหนือ" },
                { name: "ภาคกลาง" },
                { name: "ภาคตะวันออกเฉียงเหนือ" },
              ]}
              onSelected={hendleSelected}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="ราคาแรกซื้อ"
              nameInput="p"
              placeholder="3,000,000"
              unit="บาท"
              onChange={handleChange}
            />

            <InputForm
              nameLable="ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน"
              nameInput="s"
              placeholder="300,000"
              unit="บาท"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <InputForm
              nameLable="คาดว่าจะใช้งานเครื่องกี่ปี"
              nameInput="y"
              placeholder="8"
              unit="ปี"
              onChange={handleChange}
            />
            <InputForm
              nameLable="อัตราดอกเบื้ย(ร้อยละ)"
              nameInput="i"
              placeholder="2.9"
              unit="%"
              onChange={handleChange}
              // background="#f2f2f2"
            />
            <div className="card-body d-flex flex-column align-items-center ">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    /* <Switch>
      <Route path="/rice/las" component={SecondFormRice}/>
    </Switch>
    </Router> */
  );
}

export default FirstformRice;
