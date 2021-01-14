import React from "react";
import "../assets/css/CardHistoryRice.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { GiMoneyStack, GiFarmTractor } from "react-icons/gi";
// import { GrMoney } from "react-icons/gr";
import { FaCoins,FaCommentsDollar,FaTractor } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import "../assets/css/Home.css";


function CardDetail({ icon,nameCard, outPutCard, unitCard, backgroundColor,iconColor,titleColor,unitColor }) {
  return (
    <div className="card mb-0 ml-1 mr-1 p-4 shadow border-0 col-md-3 col-lg-4 col-xs-4 col-sm-6 " style={{ maxWidth: "156", backgroundColor:backgroundColor , minHeight: "156px",borderRadius:"0px"}}>
      <div className=" d-flex flex-row justify-content-center align-items-center mb-1 " style={{color:iconColor}}>
        {icon == "0" ? (
          <MdAttachMoney size="35px" />
        ) : icon == "1" ? ( 
          <FaCommentsDollar  size="35px" />
        ) : icon == "2" ? (
          <FaTractor size="35px" />
        ) : (
          <FaCoins size="35px" />
        )}
      </div>

      <h4 className="font d-flex flex-colum justify-content-center align-items-center " style={{color:titleColor}}>{nameCard}</h4>
      <h4  className="font d-flex flex-colum justify-content-center align-items-center  "style={{color:"#B3B842"}}>{outPutCard}</h4>
      <h5  className="font d-flex flex-colum justify-content-center align-items-center " style={{color:unitColor}}>{unitCard}</h5>
      
    </div>
  );
}

export default CardDetail;
