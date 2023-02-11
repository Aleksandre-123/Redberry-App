import React, { useContext } from 'react'
import { routingContext } from '../../Context/RoutingContext'
import './SecondPageForm.css'
function SecondPageForm() {
  const{formSubmit}=useContext(routingContext)
  return (
    <form className="personal_data" onSubmit={formSubmit}>
            <div className="third_page_form_first_line">
              <label for="">თანამდებობა</label>
              <input
                type="text"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                className="large_inputs"
              />
              <span className="language">მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className="third_page_form_second_line">
              <label for="">დამსაქმებელი</label>
              <input
                type="text"
                placeholder="დამსაქმებელი"
                className="large_inputs"
              />
              <span className="language">მინიმუმ 2 სიმბოლო</span>
            </div>
            <div className="third_page_form_third_line">
              <div className="third_page_form_third_line_input">
                <label for="">დაწყების რიცხვი</label>
                <input
                  type="date"
                  placeholder="ანზორ"
                  className="small_inputs"
                />
              </div>
              <div className="third_page_form_third_line_input">
                <label for="">დამთავრების რიცხვი</label>
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
                className="about_me_input"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              ></textarea>
              <div className="third_page_line"></div>
            </div>
           
          </form>
  )
}

export default SecondPageForm
