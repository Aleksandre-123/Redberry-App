import React,{createContext,useState} from 'react'


export const formValuesContext=createContext()
function FormValuesContext(props) {
  const[name,setName]=useState('')  
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[lastName,setLastName]=useState('')
  const[about,setAbout]=useState('')
  const aboutChange=(e)=>{
    setAbout(e.target.value)
  }
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
  const value={changeName,changeLastName,changeEmail,changePhone,name,email,lastName,phone,aboutChange,about}
  return (
    <formValuesContext.Provider value={value}>
        {props.children}
    </formValuesContext.Provider>
  )
}


export default FormValuesContext
