import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/navigationBar.css";
import { MdFingerprint } from "react-icons/md";
import { FaPagelines, FaBars, FaTimes, FaLock } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const location = useLocation();

  const isCurrentPage = (page) => {
    return location.pathname == page ? "#B3B842" : "#353E3B";
  };
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <FaPagelines id="faPagelines" className="navbar-icon" />
          AG<samp>calculator</samp>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
              style={{ color: isCurrentPage("/") }}
            >
              หน้าหลัก
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cane"
              className="nav-links"
              onClick={closeMobileMenu}
              style={{ color: isCurrentPage("/cane") }}
            >
              รถตัดอ้อย
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/rice"
              className="nav-links"
              onClick={closeMobileMenu}
              style={{ color: isCurrentPage("/rice") }}
            >
              เครื่องเกี่ยวนวดข้าว
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/history"
              className="nav-links"
              onClick={closeMobileMenu}
              style={{ color: isCurrentPage("/history") }}
            >
              ประวัติ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/staff"
              className="nav-links"
              onClick={closeMobileMenu}
              style={{ color: isCurrentPage("/staff") }}
            >
              <FaLock /> staff
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
