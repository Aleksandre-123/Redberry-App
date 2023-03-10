import React, { createContext, useContext, useState } from "react";
import { fetchContext } from "./FetchContext";
import { formValuesContext } from "./FormValuesContext";

export const routingContext = createContext();
function RoutingContext(props) {
  const{fetchData}=useContext(fetchContext)
  const { name, email, lastName, phone, employer, position, end, start, description } = useContext(formValuesContext);
  const langDetectorRegex = /^[ა-ჰ\s]*$/;
  const telRegex =
    /\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/;
  const emailRegex = /^[^@]+@(redberry)\.ge$/;
  const nameValid = name.trim().length > 2 && langDetectorRegex.test(name);
  const lastNameValid =lastName.trim().length > 2 && langDetectorRegex.test(lastName);
  const phoneValid = telRegex.test(phone) && phone.trim().length === 13;
  const emailValid = emailRegex.test(email);
  const positionValid = position.trim().length>2
  const employerValid = employer.trim().length>2
  const startValid = start.trim().length>0
  const endValid = end.trim().length>0
  const descValid = description.trim().length>0
  
  console.log(fetchData);
  const [notUrl,setNotUrl]=useState(false)  
  const [url,setUrl]=useState(null)
  const [image,setImage]=useState(null)
  const [type,setType]=useState('')
  const [namesErrors, setNamesErrors] = useState(false);
  const [lastNameErrors, setLastNameErrors] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [page, setPage] = useState(0);
  
  const photoValid = type.trim().length>0
  const valid = nameValid && lastNameValid && phoneValid && emailValid && photoValid;
  const validSecondPage = positionValid && employerValid && startValid && endValid && descValid;
  const goNextPage = (e) => {
    e.preventDefault();
    if (page === 1) {
      if (valid) {
        setPage(page + 1);
      } else {
        nameValid ? setNamesErrors(false) : setNamesErrors(true);
        lastNameValid ? setLastNameErrors(false) : setLastNameErrors(true);
        emailValid ? setEmailError(false) : setEmailError(true);
        phoneValid ? setPhoneError(false) : setPhoneError(true);
        photoValid ? setNotUrl(false) : setNotUrl(true)
      }
    } else if(page===2){
      if (validSecondPage) {
        setPage(page + 1);
      }
    } else {
      setPage(page + 1);
    }
  };
  const backPreviousPage = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const uploadPhoto=(e)=>{
    const file=e.target.files[0];
    setType(file.name)
    const reader=new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      setUrl(reader.result)
      setImage(file)
    } 
    // setNotUrl(false)
  }
  const value = {
    goNextPage,
    backPreviousPage,
    page,
    formSubmit,
    nameValid,
    lastNameValid,
    phoneValid,
    emailValid,
    namesErrors,
    lastNameErrors,
    emailError,
    phoneError,
    uploadPhoto,
    type,
    image,
    url,
    photoValid,
    notUrl,
    validSecondPage
  };
  return (
    <routingContext.Provider value={value}>
      {props.children}
    </routingContext.Provider>
  );
}

export default RoutingContext;
