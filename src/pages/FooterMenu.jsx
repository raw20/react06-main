import React from "react";
import ManualStyle from "./../style/manual.module.css";
import "../style/footerMenu.css";
function Manual() {
  return (
    <div className="footerMenu">
      <h2 className={ManualStyle.title}>이용약관 페이지</h2>
    </div>
  );
}
function Rule() {
  return (
    <div className="footerMenu">
      <h2 className="title">회사개요 페이지</h2>
    </div>
  );
}
function EtcInfo() {
  return (
    <div className="footerMenu">
      <h2 className="title">기타정보 페이지</h2>
    </div>
  );
}
function Policy() {
  return (
    <div className="footerMenu">
      <h2 className="title">개인정보처리방침 페이지</h2>
    </div>
  );
}
export { Manual, Policy, Rule, EtcInfo };
