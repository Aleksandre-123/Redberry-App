import React, { createContext, useEffect, useState } from "react";

export const fetchContext = createContext();
function FetchContext(props) {
  const [fetchData, setFetchData] = useState([]);
  
  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchData([...data]);
      });
  }, []);

  const value = { fetchData };
  return (
    <fetchContext.Provider value={value}>
      {props.children}
    </fetchContext.Provider>
  );
}

export default FetchContext;
