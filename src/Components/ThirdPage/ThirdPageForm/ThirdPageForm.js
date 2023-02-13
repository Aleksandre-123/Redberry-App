import React from 'react'
function ThirdPageForm(props) {
  return (
    <form className="Third_personal_data">
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
            {props.fetchData.map(item=>{
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
    
    </form>
  )
}

export default ThirdPageForm
