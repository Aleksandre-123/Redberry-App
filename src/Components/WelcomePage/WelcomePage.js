import React from "react";
import "./WelcomePage.css";
import logo from "../../assets/logo.png";
import logo_2 from "../../assets/logo_2.png";
import background from "../../assets/background.png";

function WelcomePage() {
  return (
    <div className="main" style={{backgroundImage:`url(${background})`}}>
      <div className="welcomeContent">
        <img src={logo} alt="logo" class="logo" />
        <div className="line"></div>
      </div>
      <img src={logo_2} alt="" class="logo_2"/>
      <div className="button_parent">
        <button className="cv">რეზიუმეს დამატება</button>
      </div>
    </div>
  );
}

export default WelcomePage;
