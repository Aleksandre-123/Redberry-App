import React, { useContext } from "react";
import "./WelcomePage.css";
import logo from "../../assets/logo.png";
import logo_2 from "../../assets/logo_2.png";
import background from "../../assets/background.png";
import { routingContext } from "../Context/RoutingContext";

function WelcomePage() {
  const{goNextPage}=useContext(routingContext)
  return (
    <div className="main" style={{backgroundImage:`url(${background})`}}>
      <div className="welcomeContent">
        <img src={logo} alt="logo" className="logo" />
        <div className="line"></div>
      </div>
      <img src={logo_2} alt="" className="logo_2"/>
      <div className="button_parent">
        <button onClick={goNextPage} className="cv">რეზიუმეს დამატება</button>
      </div>
    </div>
  );
}

export default WelcomePage;
