import React from "react";
import "../assets/css/CardProRice.css";
import { IoIosArrowForward } from "react-icons/io";
// import { FiArrowRightCircle, FiArrowDown, FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { GiMoneyStack, GiFarmTractor } from "react-icons/gi";
// import { GrMoney } from "react-icons/gr";
// import { FaCoins } from "react-icons/fa";
import { FaCoins,FaCommentsDollar,FaTractor } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { NumberFormat } from "../utils/Function";


function CardProRice({ icon, nameCard, priceProcess, unitCard }) {
  return (
    <div className="card font " style={{borderRadius: "25px"}}>
      <div className="card-header d-flex flex-row justify-content-center align-items-center  ">
        {icon == "0" ? (
          <MdAttachMoney size="35px" />
        ) : icon == "1" ? (
          <FaCommentsDollar size="35px" />
        ) : icon == "2" ? (
          <FaTractor size="35px" />
        ) : (
          <FaCoins size="35px" />
        )}

        <h5 className="ml-1">{nameCard} </h5>
      </div>
      <div className="card-body text-success d-flex flex-column justify-content-center align-items-center">
        {/* <p className="h5">{priceProcess} <br></br>
        <samp>บาท/ปี</samp></p> */}

        <p className="text-center">
          <samp className="h3">{NumberFormat(priceProcess)} </samp>
          <br></br>
          {unitCard}
        </p>
      </div>
      {/* <i className="card-footer bg-transparent iconRight ">
        <IoIosArrowForward />
      </i> */}
    </div>
  );
}

export default CardProRice;
