import React from "react";
import ResultMainSection from "./Pages/Result/MainSection/ResultMainSection";
import ResultTable from "./Pages/Result/ResultTable/ResultTable";
import Button from "./Pages/Button/Button";
import NavBar from "./Pages/Header/NavBar";
import UserForm from "./Pages/Home/Form/UserForm";
import HomeMainSection from "./Pages/Home/HomeMainSection/HomeMainSection";
import Footer from "./Pages/Footer/Footer";
import Loader from "./Pages/Header/Loader";

import logo from "./Pages/Header/Assets/SmallLogo.svg";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <Button title="Retry"></Button> */}
      <ResultMainSection></ResultMainSection>

      <HomeMainSection></HomeMainSection>
      <Footer></Footer>
      {/* <Loader logo={logo}></Loader> */}
    </>
  );
}

export default App;
