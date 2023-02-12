import React, {routingContext, createContext,useContext,useState } from 'react'

export const errorContext=createContext()
function ErrorContext(props) {
  
  return (
    <errorContext.Provider>
        {props.children}
    </errorContext.Provider>
  )
}

export default ErrorContext
