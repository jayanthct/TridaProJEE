import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomeMainSection from "./Pages/Home/HomeMainSection/HomeMainSection";
import ResultMainSection from "./Pages/Result/MainSection/ResultMainSection";
import Layout from "./Pages/Layout/Layout";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top whenever pathname changes
  }, [pathname]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMainSection />} />
          <Route path="result" element={<ResultMainSection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
