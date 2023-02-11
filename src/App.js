import "./App.css";
import { Fragment } from "react";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import FirstPage from "./Components/FirstPage/FirstPage";

function App() {
  return (
    <Fragment>
      {/* <WelcomePage/> */}
      <FirstPage />
    </Fragment>
  );
}

export default App;
