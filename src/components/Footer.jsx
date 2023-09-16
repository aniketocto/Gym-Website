import React from "react";
import "./Footer.css";
import Github from "../assets/github.png";
import Insta from "../assets/instagram.png";
import Link from "../assets/linkedin.png";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <img src={Github} alt="" />
          <img src={Insta} alt="" />
          <img src={Link} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
};

export default Footer;
