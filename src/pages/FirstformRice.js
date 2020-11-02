import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputForm from "../components/FormInput.js";
import StatusBar from "../components/StatusBar.js";
import ButtonForForm from "../components/ButtonForForm.js";
import SecondFormRice from "../pages/SecondFormRice.js";
import { riceAction } from "../redux/actions/rice-action";
import { RICE_STATE, riceState } from "../redux/reducers/valueRiceReducer";
import SelectInput from "../components/InputSelect.js";

import { useHistory } from "react-router-dom";

// import "../assets/css/FirstFormCane.css";
import "../assets/css/FirstformRice.css";

function FirstformRice() {
  const [rice1, setRice1] = useState({});
  const dispatch = useDispatch();
  const cat = useSelector(riceState(RICE_STATE.RICE1));
  // const bgImg = document.querySelector(".bg-img");
  // // bgImg.style.backgroundImage =" https://images.unsplash.com/photo-1450528039619-bdc0c2d26850?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  let history = useHistory();

  useEffect(() => {
    console.log("cat", cat);
  }, [cat]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // คำนวณ ค่าเสื่อมราคา = d,  ค่าดอกเบื้ย = it
    // let d, it;
    // d = (rice1["p"] - rice1["s"]) / rice1["y"];
    // it = ((rice1["p"] - rice1["s"]) / 2) * (rice1["i"] / 100);

    dispatch(riceAction.setRice1(rice1));

    //
    // console.log(`ค่าเสื่อมราคา(d) = ${d} , ค่าดอกเบื้ย(it) ${it}`);
    //เปลี่ยนไปหน้าถัดไป
    // history.push("/chakriya-natthanicha-webapp/rice2");
  };

  const handleChange = (e) => {
    setRice1({
      ...rice1,
      [e.target.name]: e.target.value,
    });
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
            {/* <Child1 clock={(value) => console.log('s', value)}></Child1> */}

            <form
              className="col-10"
              id="firstFormRice"
              onSubmit={handleSubmit}
              onReset={handleReset}
            >
              <SelectInput
                nameLable="เลือกภูมิภาค"
                nameInput="mc"
                inputSelect1="ภาคเหนือ"
                inputSelect2="ภาคกลาง"
                inputSelect3="ภาคตะวันออกเฉียงเหนือ"
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
