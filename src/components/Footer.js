import React from "react";
import "../assets/css/Footer.css";
import { FaPagelines } from "react-icons/fa";

function Footer() {
  return (
    <footer  style={{ backgroundColor: "#eee" }}>
      <div
        class=" row d-flex text-center justify-content-center ml-0 mr-0"
      >
        <div class=" p-4">
          <p style={{ lineHeight: "1.7rem", color: "##353E3B" }}>
            © คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น <br></br>
            โทรศัพท์ 043-009700<br></br>
            โทรสาร 043-362087 ,043-362142
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
