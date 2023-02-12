import React, { useContext } from "react";
import './FirstPage.css'
import logo3 from '../../assets/logo3.png'
import done from '../../assets/done.png'
import previous from '../../assets/previous.png'
import { routingContext } from "../Context/RoutingContext";
import { formValuesContext } from "../Context/FormValuesContext";

function FirstPage() {
    const{backPreviousPage,goNextPage,namesErrors,lastNameErrors,emailError,phoneError,uploadPhoto,type,image,
      url,notUrl}=useContext(routingContext)
    const{name,email,lastName,phone,changeName,
      changeLastName,changeEmail,changePhone,aboutChange,about}=useContext(formValuesContext)
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
                <label className={`${namesErrors? 'errorText':''}`} >სახელი</label>
                <input type="text" placeholder="ანზორ" className={`first_page_small_inputs ${namesErrors? 'error':''}`} value={name} onChange={changeName}/>
                <span className={`first_page_language ${namesErrors? 'errorText':''}`}>მინიმუმ 2 ასო, ქართული ასოები</span>
              </div>
              <div className="second_page_form_first_line_input">
                <label className={`${lastNameErrors? 'errorText':''}`}>გვარი</label>
                <input type="text" placeholder="მუმლაძე" className={`first_page_small_inputs ${lastNameErrors? 'error':''}`} value={lastName} onChange={changeLastName}></input>
                <span className={`first_page_language ${lastNameErrors? 'errorText':''}`}>მინიმუმ 2 ასო, ქართული ასოები</span>
              </div>
            </div>
            <div className="second_page_form_second_line">
              <h2 className={`personal_photo ${notUrl? 'errorPhone':''}`}>პირადი ფოტოს ატვირთვა</h2>
              <button className="attach_button">
                <span className="attach_button_span">ატვირთეთ</span>
                <input type="file" className="attach_photo" onChange={uploadPhoto} />
              </button>
              <span className="attached_file_name">{type}</span>
              {/* <img className='main_image' src={url}/> */}
            </div>
            <div className="second_page_form_third_line">
              <h2 className="about_person_header">ჩემ შესახებ (არასავალდებულო)</h2>
              <textarea
                value={about}
                onChange={aboutChange}
                className="about_me_input"
                placeholder="ზოგადი ინფო შენს შესახებ"
              ></textarea>
            </div>
            <div className="second_page_form_fourth_line">
              <label className={`${emailError? 'errorText':''}`}>ელ-ფოსტა</label>
              <input
                value={email} onChange={changeEmail}
                type="email"
                placeholder="anzor666@redberry.ge"
                className={`large_inputs ${emailError? 'error':''}`}
              />
              <span className={`email ${emailError? 'errorText':''}`}>უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>
            <div className="second_page_form_fifth_line">
              <label className={`phone ${phoneError? 'errorText':''}`}>მობილურის ნომერი</label>
              <input
                value={phone} onChange={changePhone}
                type="text"
                placeholder="+995 551 12 34 56"
                className={`large_inputs ${phoneError? 'error':''}`}
              />
              <span className={`number ${phoneError? 'errorText':''}`}>
                უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
              </span>
            </div>
            <div className="first_page_next_button_parent">
              <button className="next_button" onClick={goNextPage}></button>
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
