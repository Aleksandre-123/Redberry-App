import React, { useContext } from 'react'
import avatar from "../../../assets/avatar.png";
import phone2 from "../../../assets/phone2.png";
import email2 from "../../../assets/email2.png";
import { formValuesContext } from '../../Context/FormValuesContext';
import { routingContext } from '../../Context/RoutingContext';
function SecondPageRight() {
    const{name,email,lastName,phone,about,description,employer,start,end,position}=useContext(formValuesContext)
    const { url } = useContext(routingContext);

  return (
    <div>
      
        <div className="top_content">
            <div className="top_left">
              <h3 className="about_me">გამოცდილება</h3>
              <h3 className="occupation_second">{employer} {position}</h3>
              <h3 className="date_second">{start} {end}</h3>
              <p className="about_me_par_edu_second">
                {description}
              </p>
            </div>
          </div>
          <div className="right_line"></div>
    </div>
  )
}

export default SecondPageRight
