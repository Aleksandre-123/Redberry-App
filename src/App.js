import "./App.css";
import { Fragment, useContext } from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import FirstPage from "./Components/FirstPage/FirstPage";
import { routingContext } from "./Components/Context/RoutingContext";

function App() {
  const{page}=useContext(routingContext)
  return (
    <Fragment>
      {page===0&&<WelcomePage/>}
      {page===1&&<FirstPage />}
    </Fragment>
  );
}

export default App;
