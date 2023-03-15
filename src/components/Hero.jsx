import React from "react";
import { Navbar } from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="hero_section">
        <Navbar />
        <div className="hero_container">
          <div className="left_hero_section">
            <h5 className="title">Think. Make. Solve.</h5>
            <div className="our_service">
              <img src="./img/line.png" alt="" className="line" />
              <h6 className="subtitle">What we Do.</h6>
            </div>
            <p className="desc">
              We enjoy creating delightful, human-centered digital experiences.
            </p>
            <button className="hero_btn">Download CV</button>
          </div>
          <div className="right_hero_section">
            {/* 3d model */}
            <img src="./img/moon.png" alt="" className="moon"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
