import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import Bars from "../assets/bars.png";
import Logo from "../assets/logo.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setmenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setmenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link to="home" span={true} smooth={true} onClick={() => setmenuOpened(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" span={true} smooth={true} onClick={() => setmenuOpened(false)}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" span={true} smooth={true} onClick={() => setmenuOpened(false)}>
              Why Us
            </Link>{" "}
          </li>
          <li>
            <Link to="plans" span={true} smooth={true} onClick={() => setmenuOpened(false)}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="Testimonials" span={true} smooth={true} onClick={() => setmenuOpened(false)}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
