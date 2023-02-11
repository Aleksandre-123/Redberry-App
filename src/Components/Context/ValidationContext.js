import React,{createContext,useState} from 'react'


export const validationContext=createContext()
function ValidationContext(props) {
  const[name,setName]=useState('')  
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[lastName,setLastName]=useState('')
  const changeName=(e)=>{
    setName(e.target.value)
  }
  const changeLastName=(e)=>{
    setLastName(e.target.value)
  }
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const changePhone=(e)=>{
    setPhone(e.target.value)
  }
  const value={changeName,changeLastName,changeEmail,changePhone,name,email,lastName,phone}
  return (
    <validationContext.Provider value={value}>
        {props.children}
    </validationContext.Provider>
  )
}


export default ValidationContext
