import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      {/*---------------------- Left Side--------------------- */}
      <div className="left-h">
        <Header />
        {/* The best add */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left:mobile?"168px" :"238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the area</span>
        </div>

        {/* the hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up to your life at the fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+20</span>
            <span>Experts Coachs</span>
          </div>
          <div>
            <span>+500</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness programmed</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/*---------------------- Right Side--------------------- */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span> 116bpm</span>
        </motion.div>

        <img src={hero_image} className="hero-image" alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          className="hero-image-back"
          alt=""
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
