import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import SecondFormRice from "../pages/SecondFormRice.js";
import { riceAction } from "../redux/actions/rice-action";
import { RICE_STATE, riceState } from "../redux/reducers/valueRiceReducer";
import Dropdown from "../components/Dropdown";

import { useHistory } from "react-router-dom";

import "../assets/css/FirstFormCane.css";

function FirstformRice() {
  const [rice1, setRice1] = useState({});
  const dispatch = useDispatch();
  const cat = useSelector(riceState(RICE_STATE.RICE1));

  let history = useHistory();

  // useEffect(() => {
  //   console.log("cat", cat);
  // }, [cat]);
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
      [e.target.name]: +((e.target.value).replace(/,/g, '')),
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
    // console.log(selected);
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
            <StatusBar status="1" />
            <div className="mt-4 mb-3  col-10">
              <h5 className="text-center">ข้อมูลทั่วไป</h5>
            </div>

            <form
              className="col-10"
              id="firstFormRice"
              onSubmit={handleSubmit}
              onReset={handleReset}
            >
              <Dropdown
                nameLable="ภูมิภาค"
                optionLabal="เลือกภูมิภาค"
                options={["ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออกเฉียงเหนือ"]}
                onSelected={hendleSelected}
              />
              <InputForm
                nameLable="ราคาแรกซื้อ"
                nameInput="p"
                placeholder="ราคาแรกซื้อ"
                unit="บาท"
                onChange={handleChange}
              />

              <InputForm
                nameLable="ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน"
                nameInput="s"
                placeholder="ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน"
                unit="บาท"
                onChange={handleChange}
              />
              <InputForm
                nameLable="คาดว่าจะใช้งานเครื่องกี่ปี"
                nameInput="y"
                placeholder="คาดว่าจะใช้งานเครื่องกี่ปี"
                unit="ปี"
                onChange={handleChange}
              />
              <InputForm
                nameLable="อัตราดอกเบื้ย(ร้อยละ)"
                nameInput="i"
                placeholder="อัตราดอกเบื้ย(ร้อยละ)"
                unit="%"
                onChange={handleChange}
              />

              <ButtonForForm namePer="ย้อนกลับ" nameNext="ถัดไป" />
            </form>
          </div>
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
