import { Outlet } from "react-router-dom";

import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
   
     <>
     <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
     </>
  );
};

export default Layout;