import React, { useContext } from 'react'
import { formValuesContext } from '../../Context/FormValuesContext'
import { routingContext } from '../../Context/RoutingContext'
// import { validationContext } from '../../Context/ValidationContext'
import './SecondPageForm.css'
function SecondPageForm() {
  const{formSubmit}=useContext(routingContext)
  const{position,changePosition,employer,changeEmployer,start,changeStart,description,changeDesc,end,changeEnd}=useContext(formValuesContext)
  return (
    <form className="personal_data" onSubmit={formSubmit}>
            <div className="third_page_form_first_line">
              <label>თანამდებობა</label>
              <input    
                type="text"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                className="large_inputs"
                onChange={changePosition}
                value={position}
              />
              <span className="language">მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className="third_page_form_second_line">
              <label>დამსაქმებელი</label>
              <input
                type="text"
                placeholder="დამსაქმებელი"
                className="large_inputs"
                value={employer}
                onChange={changeEmployer}
              />
              <span className="language">მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className="third_page_form_third_line">
              <div className="third_page_form_third_line_input">
                <label>დაწყების რიცხვი</label>
                <input
                  type="date"
                  placeholder="ანზორ"
                  className="small_inputs"
                  value={start}
                  onChange={changeStart}
                />
              </div>
              <div className="third_page_form_third_line_input">
                <label>დამთავრების რიცხვი</label>
                <input
                  type="date"
                  placeholder="მუმლაძე"
                  className="small_inputs"
                  value={end}
                  onChange={changeEnd}
                />
              </div>
            </div>
            <div className="third_page_form_fourth_line">
              <h2 className="about_person_header">აღწერა</h2>
              <textarea
                className="about_me_input"
                value={description}
                onChange={changeDesc}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              ></textarea>
              <div className="third_page_line"></div>
            </div>
           
    </form>
  )
}

export default SecondPageForm
