import React, { useContext } from "react";
import './FirstPage.css'
import logo3 from '../../assets/logo3.png'
import previous from '../../assets/previous.png'
import { routingContext } from "../Context/RoutingContext";
function FirstPage() {
    const{backPreviousPage}=useContext(routingContext)
  return (
    <div className="second_page">
      <div className="left">
        <div className="left_wrapper">
          <div className="header">
            <div className="header_top">
              <h1 className="personal_info">პირადი ინფო</h1>
              <span className="page_one">1/3</span>
            </div>
            <div className="header_bottom"></div>
          </div>
          <form className="personal_data">
            <div className="second_page_form_first_line">
              <div className="second_page_form_first_line_input">
                <label for="">სახელი</label>
                <input type="text" placeholder="ანზორ" className="small_inputs" />
                <span className="language">მინიმუმ 2 ასო, ქართული ასოები</span>
              </div>
              <div className="second_page_form_first_line_input">
                <label for="">გვარი</label>
                <input type="text" placeholder="მუმლაძე" className="small_inputs" />
                <span className="language">მინიმუმ 2 ასო, ქართული ასოები</span>
              </div>
            </div>
            <div className="second_page_form_second_line">
              <h2 className="personal_photo">პირადი ფოტოს ატვირთვა</h2>
              <button className="attach_button">
                <span className="attach_button_span">ატვირთეთ</span>
                <input type="file" className="attach_photo" />
              </button>
            </div>
            <div className="second_page_form_third_line">
              <h2 className="about_person_header">ჩემ შესახებ (არასავალდებულო)</h2>
              <textarea
                className="about_me_input"
                placeholder="ზოგადი ინფო შენს შესახებ"
              ></textarea>
            </div>
            <div className="second_page_form_fourth_line">
              <label for="">ელ-ფოსტა</label>
              <input
                type="email"
                placeholder="anzor666@redberry.ge"
                className="large_inputs"
              />
              <span className="email">უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>
            <div className="second_page_form_fifth_line">
              <label for="">მობილურის ნომერი</label>
              <input
                type="text"
                placeholder="+995 551 12 34 56"
                className="large_inputs"
              />
              <span className="number">
                უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
              </span>
            </div>
            <div className="next_button_parent">
              <button className="next_button">შემდეგი</button>
            </div>
          </form>
        </div>
      </div>
      <div className="right">
        <img src={logo3} alt="logo3" className="logo3" />
      </div>
      <img src={previous} onClick={backPreviousPage} alt="previous" className="previous" />
    </div>
  );
}

export default FirstPage;
