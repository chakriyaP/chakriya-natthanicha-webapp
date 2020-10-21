import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/navigationBar.css";
import { MdFingerprint } from "react-icons/md";
import { FaPagelines, FaBars, FaTimes, FaLock } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const location = useLocation();

  const isCurrentPage = (page) => {
    return location.pathname.substring(0, page.length) == page ? "#B3B842" : "#353E3B";
  };
  
  console.log(location.pathname);
  return (
    <nav class="navbar navbar-expand-md navbar-light primary-bg font sticky-top">
      <div class="container-fluid row">
        {/* <div class="navbar-brand bg-warning col-11"> */}
          <Link to="/home" class="navbar-brand">
            <FaPagelines className="mb-4 second-cl" size="36px" />
            <samp className="h1">AG</samp>
            <samp className="second-cl h2">calculator</samp>
          </Link>
        {/* </div> */}

          <button
            class="btn-sm navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#narbarResposive"
            onClick={handleClick}
          >
            {/* <FaTimes/>  */}
          {click ? <FaTimes/> : <FaBars />}
        </button> 
      
        <div class="collapse navbar-collapse" id="narbarResposive">
          <ul class="navbar-nav ml-auto primary-bg">
            <li class="nav-item">
              <Link
                to="/home"
                class="nav-link active"
                style={{ color: isCurrentPage("/home") }}
              >
                หน้าหลัก
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/cane"
                class="nav-link"
                style={{ color: isCurrentPage("/cane") }}
              >
                รถตัดอ้อย
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/rice"
                class="nav-link"
                style={{ color: isCurrentPage("/rice") }}
              >
                เครื่องเกี่ยวนวดข้าว
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/history"
                class="nav-link"
                style={{ color: isCurrentPage("/history") }}
              >
                ประวัติ
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/staff"
                class="nav-link"
                style={{ color: isCurrentPage("/staff") }}
              >
                <FaLock /> staff
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
