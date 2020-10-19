import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/navigationBar.css";
import { MdFingerprint } from "react-icons/md";
import { FaPagelines, FaBars, FaTimes, FaLock } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav class="navbar navbar-expand-md navbar-light primary-bg font sticky-top">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <FaPagelines className="mr-1 mb-1 second-cl" />
          AG<samp className="second-cl">calculator</samp>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#narbarResposive"
        >
          {click ? <FaTimes /> : <FaBars />}

        </button>
        <div class="collapse navbar-collapse" id="narbarResposive">
          <ul class="navbar-nav ml-auto primary-bg">
            <li class="nav-item">
              <Link to="/" class="nav-link active text-dark">
                หน้าหลัก
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cane" class="nav-link text-dark">
                รถตัดอ้อย
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/rice" class="nav-link text-dark">
                เครื่องเกี่ยวนวดข้าว
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/history" class="nav-link text-dark">
                ประวัติ
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/staff" class="nav-link text-dark">
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
