import React, { createContext, useState } from 'react'

export const routingContext=createContext()
function RoutingContext(props) {
    const[page,setPage]=useState(0)
    const goNextPage=(e)=>{
        // e.preventDefault()
        setPage(page+1)
    }
    const backPreviousPage=(e)=>{
        // e.preventDefault()
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
