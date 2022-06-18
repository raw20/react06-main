import React from "react";
import { NavLink } from "react-router-dom";
import "../style/footer.css";

const Footer = ({ title }) => {
  function handlerActive({ isActive }) {
    return isActive ? "on" : " ";
  }

  return (
    <footer id="footer">
      <h2>{title} 정보 </h2>
      <div className="company-info">
        <ul>
          <li>
            <NavLink to="/manual" className={handlerActive}>
              이용약관
            </NavLink>
          </li>
          <li>
            <NavLink to="/policy" className={handlerActive}>
              개인정보처리방침
            </NavLink>
          </li>
          <li>
            <NavLink to="/rule" className={handlerActive}>
              회사개요
            </NavLink>
          </li>
          <li>
            <NavLink to="/etcInfo" className={handlerActive}>
              기타정보
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
