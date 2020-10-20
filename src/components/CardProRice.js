import React from "react";
import "../assets/css/CardProRice.css";
import { IoIosArrowForward } from "react-icons/io";
// import { FiArrowRightCircle, FiArrowDown, FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiMoneyStack, GiFarmTractor } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";

function CardProRice({ icon, nameCard, priceProcess }) {
  return (
    <div class="card font">
      <div class="card-header d-flex flex-row justify-content-center align-items-center ">
        {icon == "0" ? (
          <RiMoneyDollarCircleFill size="35px" />
        ) : icon == "1" ? (
          <GiMoneyStack size="35px" />
        ) : icon == "2" ? (
          <GrMoney size="35px" />
        ) : (
          <GiFarmTractor size="35px" />
        )}

        <h5 className="ml-1">{nameCard} </h5>
      </div>
      <div class="card-body text-success d-flex flex-column justify-content-center align-items-center">
        {/* <p className="h5">{priceProcess} <br></br>
        <samp>บาท/ปี</samp></p> */}

        <p className="text-center">
          <samp className="h3">{priceProcess} </samp>
          <br></br>
          บาท/ปี
        </p>
      </div>
      <i class="card-footer bg-transparent iconRight ">
        <IoIosArrowForward />
      </i>
    </div>
  );
}

export default CardProRice;
