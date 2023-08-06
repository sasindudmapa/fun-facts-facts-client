import React from "react";

//static
import logo from "../Static/logo2.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="" className="logo-ico" />
        </div>
        <div className="footer-title">Facts Pot</div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">©️ 2022 FACTS POT</div>
        <div className="footer-contact">Contact Us: factpot@proton.me</div>
      </div>
    </div>
  );
}

export default Footer;
