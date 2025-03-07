import { Outlet } from "react-router-dom";

import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

import MapAnimation from "../Home/Form/MapAnimation";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
      <MapAnimation></MapAnimation>
    </>
  );
};

export default Layout;
