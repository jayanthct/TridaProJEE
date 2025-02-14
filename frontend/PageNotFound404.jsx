import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import layers from "./src/Pages/Home/HomeMainSection/layers.png";





function PageNotFound404() {
  const navigate = useNavigate();
  return (
    <>
      <section className="pagenotfound relative  flex flex-col gap-1 h-screen justify-center items-center px-[16px] py-0 md:py-[2%] md:px-[10%] w-full">
      <img
        src={layers}
        alt=""
        className="background absolute -z-3 bottom-[-120px] right-[-220px]"
      />
      <img
        src={layers}
        alt=""
        className="background absolute -z-3 top-[-260px] left-[-220px] scale-[-1]"
      />
        <div className="text flex flex-col justify-center items-center -mt-10">
          <span>
            <p className="heading text-[156px] lg:text-[264px] text-[#161B2D] font-extrabold">
              404
            </p>
          </span>
          <p className="desc text-[27px] md:text-[36px] font-semibold text-[#FF4E59] -mt-10">
            Page Not Found!
          </p>
          <p className="desc text-[#161B2D] text-[21px] md:text-[27px] font-normal">
            Tryagain Later
          </p>
        </div>
      </section>
    </>
  );
}

export default PageNotFound404;
