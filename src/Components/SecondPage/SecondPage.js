import React, { useContext, useState } from "react";
import "./SecondPage.css";
import logo3 from "../../assets/logo3.png";
import avatar from "../../assets/avatar.png";
import previous from "../../assets/previous.png";
import { routingContext } from "../Context/RoutingContext";
import SecondPageForm from "./SecondPageForm/SecondPageForm";
function SecondPage() {
  const { backPreviousPage, goNextPage } = useContext(routingContext);
  const [ experience, setExperience ] = useState([true]);
  const Experience = (e) => {
    setExperience([...experience, experience.push(true)]);
  };
  return (
    <div className="second_page_two">
      <div className="Second_page_left">
        <div className="left_wrapper">
          <div className="header">
            <div className="header_top">
              <h1 className="personal_info">გამოცდილება</h1>
              <span className="page_one">2/3</span>
            </div>
            <div className="header_bottom"></div>
          </div>
          
          
          {
            experience.map(item=>{
              return <SecondPageForm/> 
            })
          }
          <div className="third_page_form_fifth_line">
            <button className="experience_button" onClick={Experience}>
              მეტი გამოცდილების დამატება
            </button>
          </div>
        </div>
        <div className="next_button_parent">
          <button
            type="submit"
            onClick={backPreviousPage}
            className="previous_button"
          >
            უკან
          </button>
          <button type="submit" onClick={goNextPage} className="next_button">
            შემდეგი
          </button>
        </div>
      </div>
      <div className="third_page_right">
        <div className="top_content_parent">
          <div className="top_content">
            <div className="top_left">
              <h1 className="fullname">ანზორ მუმლაძე</h1>
              <div className="email_address">
                <img
                  src="../../assets/email.png"
                  alt=""
                  className="gmail_icon"
                />
                <span className="gmail">anzorr666@redberry.ge</span>
              </div>
              <div className="phone_number">
                <img
                  src="../../assets/phone.png"
                  alt=""
                  className="phone_icon"
                />
                <span className="mobile">+995 597 63 45 16</span>
              </div>
              <h3 className="about_me">შემს შესახებ</h3>
              <p className="about_me_par">
                ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
                გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.{" "}
              </p>
            </div>
            <div className="top_right">
              <img src={avatar} alt="" className="avatar" />
            </div>
          </div>
          <div className="right_line"></div>
        </div>
        <div className="logo3_parent">
          <img src={logo3} alt="logo3" className="logo3" />
        </div>
      </div>
      <img
        src={previous}
        onClick={backPreviousPage}
        alt="previous"
        className="previous"
      />
    </div>
  );
}

export default SecondPage;
