import React, { createContext, useState } from "react";

export const formValuesContext = createContext();
function FormValuesContext(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDesc] = useState("");
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");

  const changeStart=(e)=>{
    setStart(e.target.value)
    console.log(e)
  }
  const changeEnd=(e)=>{
    setEnd(e.target.value)
    console.log(e)
  }
  const changeDesc=(e)=>{
    setDesc(e.target.value)
    console.log('asd');
  }
  const changeEmployer=(e)=>{
    setEmployer(e.target.value)
  }
  const changePosition=(e)=>{
    setPosition(e.target.value)
  }
  const aboutChange = (e) => {
    setAbout(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const value = {
    changeName,
    changeLastName,
    changeEmail,
    changePhone,
    name,
    email,
    lastName,
    phone,
    aboutChange,
    about,
    position,
    changePosition,
    employer,
    changeEmployer,
    start,
    changeStart,
    description,
    changeDesc,
    end,
    changeEnd,
    setEmployer,
    setStart,
    setEnd,
    setDesc,
    setPosition
  };
  return (
    <formValuesContext.Provider value={value}>
      {props.children}
    </formValuesContext.Provider>
  );
}

export default FormValuesContext;
