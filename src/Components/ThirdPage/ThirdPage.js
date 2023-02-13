import React, { useContext,useState } from "react";
import logo3 from "../../assets/logo3.png";
import previous from "../../assets/previous.png";
import phone2 from "../../assets/phone2.png";
import email2 from "../../assets/email2.png";
import { routingContext } from "../Context/RoutingContext";

import "./ThirdPage.css";
import { fetchContext } from "../Context/FetchContext";
import { formValuesContext } from "../Context/FormValuesContext";
import ThirdPageForm from "./ThirdPageForm/ThirdPageForm";
let id=1
function ThirdPage() {
  const { backPreviousPage, goNextPage,url,type} = useContext(routingContext);
  const{name,email,lastName,phone,about,description,employer,start,end,position}=useContext(formValuesContext)
  const{fetchData}=useContext(fetchContext)
  const [ education, setEducation ] = useState([{id:'1',condition:true}]);
  const Education = (e) => {
    console.log('asd');
    id+=1
    console.log(education)
    setEducation([...education, {
      id:id,
      condition:true
    }]);
  };
  return (
    <div className={`second_page_two ${education.length===1?'height':''}`}>
      <div className="Second_page_left">
        <div className="left_wrapper">
          <div className="header">
            <div className="header_top">
              <h1 className="personal_info">განათლება</h1>
              <span className="page_one">3/3</span>
            </div>
            <div className="header_bottom"></div>
          </div>  
          
          { 
            education.map(item=>{
                return <ThirdPageForm key={item.id} fetchData={fetchData}/>
            })
          }
          <div className="third_page_form_fifth_line">
            <button className="experience_button" onClick={Education}>
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
            
          </button>
        </div>
      </div>
      <div className="third_page_right">
        <div className="top_content_parent">
          <div className="top_content">
            <div className="top_left">
              <h1 className="fullname">{name} {lastName}</h1>
              <div className="email_address">
                <img
                  src={email2}
                  alt=""
                  className="gmail_icon"
                />
                <span className="gmail">{email}</span>
              </div>
              <div className="phone_number">
                <img src={phone2} alt="" className="phone_icon"/>
                <span className="mobile">{phone}</span>
              </div>
              <h3 className="about_me">ჩემს შესახებ</h3>
              <p className="about_me_par">
                {about}
              </p>
            </div>
            <div className="top_right">
              <img src={url} alt="" className="avatar" />
            </div>
          </div>
          <div className="right_line"></div>
          <div className="top_content">
            <div className="top_left">
              <h3 className="about_me">გამოცდილება</h3>
              <h3 className="occupation">{employer} {position}</h3>
              <h3 className="date">{start} {end}</h3>
              <p className="about_me_par_edu">
                {description}
              </p>
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

export default ThirdPage;
