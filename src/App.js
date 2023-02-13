import "./App.css";
import { Fragment, useContext } from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import FirstPage from "./Components/FirstPage/FirstPage";
import { routingContext } from "./Components/Context/RoutingContext";
import SecondPage from "./Components/SecondPage/SecondPage";
import ThirdPage from "./Components/ThirdPage/ThirdPage";

function App() {
  const{page}=useContext(routingContext)
  return (
    <Fragment>
      {/* {page===0&&<WelcomePage/>}
      {page===1&&<FirstPage />} */}
      {page===0&&<SecondPage/>}
      {/* {page===3&&<ThirdPage/>} */}
    </Fragment>
  );
}

export default App;
