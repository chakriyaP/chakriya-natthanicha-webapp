import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/navigationBar.css";
// import "../assets/css/common.css"
import { FaPagelines, FaBars, FaTimes, FaLock } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const location = useLocation();

  const isCurrentPage = (page) => {
    // console.log(location.pathname.split("/")[2].substring(0, page.length) === page);
    return location.pathname.split("/")[2]
      ? location.pathname.split("/")[2].substring(0, page.length) === page
        ? "#B3B842"
        : "#353E3B"
      : location.pathname.split("/")[1] === page
      ? "#B3B842"
      : "#353E3B";
  };

  useEffect(() => {
    console.log(location.pathname.split("/")[1]);
    console.log(location.pathname.split("/")[2]);
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light primary-bg font sticky-top">
      <div className="container-fluid row">
        <Link to="/chakriya-natthanicha-webapp/home" className="navbar-brand">
          <FaPagelines className="mb-4 second-cl" size="36px" />
          <samp className="h1">AG</samp>
          <samp className="second-cl h2">calculator</samp>
        </Link>

        <button
          className="btn-sm navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#narbarResposive"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </button>

        <div className="collapse navbar-collapse" id="narbarResposive">
          <ul className="navbar-nav ml-auto primary-bg">
            <li className="nav-item">
              <Link
                to="/chakriya-natthanicha-webapp"
                className="nav-link active nav-font"
                style={{ color: isCurrentPage("chakriya-natthanicha-webapp") }}
              >
                หน้าหลัก
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/chakriya-natthanicha-webapp/caneProcess"
                className="nav-link nav-font"
                style={{ color: isCurrentPage("cane") }}
              >
                รถตัดอ้อย
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/chakriya-natthanicha-webapp/rice"
                className="nav-link nav-font"
                style={{ color: isCurrentPage("rice") }}
              >
                เครื่องเกี่ยวนวดข้าว
              </Link>
            </li>
            <li className="nav-item">
              <div
                class="dropdown mt-1"
                style={{ color: isCurrentPage("history") }}
              >
                <a
                  class="btn btn-secondary dropdown-toggle nav-font"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: isCurrentPage("history"),
                  }}
                >
                  ประวัติ
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <Link
                    to="/chakriya-natthanicha-webapp/historyRice"
                    style={{
                      textDecoration: "none",
                      color: isCurrentPage("historyRice"),
                    }}
                  >
                    <a class="dropdown-item">ประวัติการประมวลผลข้าว</a>
                  </Link>
                  <Link
                    to="/chakriya-natthanicha-webapp/histotyCane"
                    style={{
                      textDecoration: "none",
                      color: isCurrentPage("histotyCane"),
                    }}
                  >
                    <a class="dropdown-item">ประวัติการประมวลผลอ้อย</a>
                  </Link>
                </div>
              </div>
              {/* <Link
                to="/chakriya-natthanicha-webapp/history"
                className="nav-link"
                style={{ color: isCurrentPage("history") }}
              >
                ประวัติ
              </Link> */}
            </li>
            {/* {location.pathname.split("/")[2] === "staff" ? (
              <li className="nav-item">
                <Link
                  to="/chakriya-natthanicha-webapp/staff"
                  className="nav-link nav-font"
                  style={{ color: isCurrentPage("staff") }}
                >
                  <FaLock /> ผู้ดูแล
                </Link>
              </li>
            ) :  <li>{location.pathname.split("/")[1]}</li>
            location.pathname.split("/")[1] ===
              "chakriya-natthanicha-webapp" ? (
              <li className="nav-item">
                <Link
                  to="/chakriya-natthanicha-webapp/staff"
                  className="nav-link nav-font"
                  style={{ color: isCurrentPage("staff") }}
                >
                  <FaLock /> ผู้ดูแล
                </Link>
              </li>
            ) : 
            } */}

            <li className="nav-item">
              <Link
                to="/chakriya-natthanicha-webapp/staff"
                className="nav-link nav-font"
                style={{ color: isCurrentPage("staff") }}
              >
                <FaLock /> ผู้ดูแล
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
