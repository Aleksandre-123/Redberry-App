import React, { useContext } from "react";
import logo3 from "../../assets/logo3.png";
import previous from "../../assets/previous.png";
import phone2 from "../../assets/phone2.png";
import email2 from "../../assets/email2.png";
import { routingContext } from "../Context/RoutingContext";

import "./ThirdPage.css";
import { fetchContext } from "../Context/FetchContext";
function ThirdPage() {
  const{fetchData}=useContext(fetchContext)
  const { type } = useContext(routingContext);
  return (
    <div className="second_page">
      <div className="wrapper">
        <div className="left">
          <div className="left_wrapper">
            <div className="header">
              <div className="header_top">
                <h1 className="personal_info">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
                <span className="page_one">3/3</span>
              </div>
              <div className="header_bottom"></div>
            </div>
            <form className="personal_data">
              <div className="third_page_form_first_line">
                <label>სასწავლებელი</label>
                <input
                  type="text"
                  placeholder="სასწავლებელი"
                  className="large_inputs"
                />
                <span className="language">მინიმუმ 2 სიმბოლო</span>
              </div>

              <div className="third_page_form_third_line">
                <div className="third_page_form_third_line_input">
                  <label>ხარისხი</label>
                  <select className="select">
                    <option className="option">აირჩიეთ ხარისხი</option>
                    {fetchData.map(item=>{
                      return <option className="option" key={item.id}>{item.title}</option>
                    })}
                  </select>
                </div>
                <div className="third_page_form_third_line_input">
                  <label>დამთავრების რიცხვი</label>
                  <input
                    type="date"
                    placeholder="მუმლაძე"
                    className="small_inputs"
                  />
                </div>
              </div>
              <div className="third_page_form_fourth_line">
                <h2 className="about_person_header">აღწერა</h2>
                <textarea
                  className="about_me_input_third_page"
                  placeholder="განათლების აღწერა"
                ></textarea>
                <div className="third_page_line"></div>
              </div>
              <div className="third_page_form_fifth_line">
                <button className="experience_button">
                  სხვა სასწავლებლის დამატება
                </button>
              </div>
              <div className="next_button_parent">
                <button className="previous_button">უკან</button>
                <button className="next_button"></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="third_page_right">
        <div className="top_content_parent">
          <div className="top_content">
            <div className="top_left">
              <h1 className="fullname">ანზორ მუმლაძე</h1>
              <div className="email_address">
                <img
                  src={email2}
                  alt=""
                  className="gmail_icon"
                />
                <span className="gmail">anzorr666@redberry.ge</span>
              </div>
              <div className="phone_number">
                <img src={phone2} alt="" className="phone_icon" />
                <span className="mobile">+995 597 63 45 16</span>
              </div>
              <h3 className="about_me">შემს შესახებ</h3>
              <p className="about_me_par">
                ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
                გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.{" "}
              </p>
            </div>
            <div className="top_right">
              <img src={type} alt="" className="avatar" />
            </div>
          </div>
          <div className="right_line"></div>
        </div>
        <div className="logo3_parent">
          <img src={logo3} alt="logo3" className="logo3" />
        </div>
      </div>
      <img src={previous} alt="previous" className="previous" />
    </div>
  );
}

export default ThirdPage;
