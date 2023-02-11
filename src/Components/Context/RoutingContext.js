import React, { createContext, useContext, useState } from 'react'
import { validationContext } from './ValidationContext'

export const routingContext=createContext()
function RoutingContext(props) {
    const{name,email,lastName,phone}=useContext(validationContext)
    const langDetectorRegex=/^[ა-ჰ\s]*$/;
    const telRegex=/\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/;
    const emailRegex=/^[^@]+@(redberry)\.ge$/;
    const nameValid=name.trim().length>2&&langDetectorRegex.test(name)
    const lastNameValid=lastName.trim().length>2&&langDetectorRegex.test(lastName)
    const phoneValid=telRegex.test(phone)&&phone.trim().length===13
    const emailValid=emailRegex.test(email)
    const valid=nameValid&&lastNameValid&&phoneValid&&emailValid
    const[page,setPage]=useState(0)
    const goNextPage=(e)=>{
        e.preventDefault()
        if(page===1){
          if(valid){
            setPage(page+1)
          }
        }else{
          setPage(page+1)
        }
    }
    const backPreviousPage=(e)=>{
        e.preventDefault()
        setPage(page-1)
    }
    const formSubmit=(e)=>{
      e.preventDefault()
    }
    const value={goNextPage,backPreviousPage,page,formSubmit}
  return (
    <routingContext.Provider value={value}>
        {props.children}
    </routingContext.Provider>
  )
}

export default RoutingContext
