import React from "react";
import nagpur from "./Assets/nagpur.png";
import computer from "./Assets/computer.svg";

function CollegeCard() {
  return (
    <>
      <section
        className="collegecard relative bg-white h-full flex flex-col justify-center items-start p-[16px] border-[2px] w-full border-[#161b2d4a] rounded-[12px] overflow-clip"
        style={{
          boxShadow:
            "-17px 89px 25px 0px rgba(255, 78, 89, 0.00), -11px 57px 23px 0px rgba(255, 78, 89, 0.01), -6px 32px 20px 0px rgba(255, 78, 89, 0.02), -3px 14px 15px 0px rgba(255, 78, 89, 0.03), -1px 4px 8px 0px rgba(255, 78, 89, 0.04)",
        }}
      >
        <div className="imgsection w-full">
          <img
            src={nagpur}
            alt=""
            className="collegeimage object-cover w-full"
          />
        </div>

        <div className="content flex flex-col justify-start items-start -mt-2">
          <div className="banner border-[2px] border-[#04AC47] font-medium text-[#04AC47] flex py-1 px-8 justify-center items-center rounded-full">
            Max Chances of Getting
          </div>
          <h1 className="font-medium text-[47px] text-[#161B2D]">
            <span className="text-[#FF4E59] font-bold">NIT</span>&nbsp;Nagpur
          </h1>
          <div className="branch flex flex-col justify-start items-start">
            <p className="shortform font-bold text-[21px] text-[#161b2d]">
              CSE
            </p>
            <p className="fullform font-normal text-[#161b2db0]">
              Computer Science and Engineering
            </p>
          </div>
        </div>

        <img
          src={computer}
          alt=""
          className="branchicon absolute right-[-36px] bottom-10 md:scale-[1.4]"
        />
      </section>
    </>
  );
}

export default CollegeCard;
