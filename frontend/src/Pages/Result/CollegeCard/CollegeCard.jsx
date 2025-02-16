import React from "react";
import mocktest from "./Assets/mocktest.png";

function CollegeCard({title}) {
  return (
    <>
      <section
        className="collegecard relative bg-white h-full flex flex-col justify-center items-start p-[16px] border-[2px] w-full border-[#161b2d4a] rounded-[12px] overflow-clip"
        style={{
          boxShadow:
            "-17px 89px 25px 0px rgba(255, 78, 89, 0.00), -11px 57px 23px 0px rgba(255, 78, 89, 0.01), -6px 32px 20px 0px rgba(255, 78, 89, 0.02), -3px 14px 15px 0px rgba(255, 78, 89, 0.03), -1px 4px 8px 0px rgba(255, 78, 89, 0.04)",
        }}
      >
        <img
          src={mocktest}
          alt=""
          className="branchicon w-full h-full"
        />
      </section>
    </>
  );
}

export default CollegeCard;
