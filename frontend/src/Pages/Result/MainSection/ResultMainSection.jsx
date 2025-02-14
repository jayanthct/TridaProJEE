import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import CollegeCard from "../CollegeCard/CollegeCard";
import MetaData from "../MetaDeta/MetaDeta";
import RankCard from "../RankCard/RankCard";
import ResultTable from "../ResultTable/ResultTable";

import back from "../MainSection/back.svg";

function ResultMainSection() {
  const location = useLocation();
  const data = location.state?.data; // Retrieve the data passed
  const body = location.state?.body; // Retrieve the data passed
 
  const navigate = useNavigate();

  return (
    <>
      <button 
        className="text-[#161B2D] flex gap-4 px-8 cursor-pointer justify-center items-center py-2 rounded-full h-[52px] font-bold border-2 border-[#161B2D] lg:ml-[10%] ml-[16px] -mb-0 lg:-mb-4 hover:bg-[#161b2d09]" 
        onClick={() => navigate("/")}
      >
        <img src={back} alt="" className="w-8"/> Retry
      </button>
      
      <section className="resultmainsection flex flex-wrap md:flex-row sm:flex-col gap-4 justify-center items-stretch px-[16px] md:px-[10%] py-[2%] w-full">
        {/* Rank + MetaData section */}
        <div className="rankandmeta flex flex-col w-full lg:w-[48%] h-full gap-4 justify-between items-center flex-grow">
          <RankCard rank={data?.rank} />
          <MetaData percentile={data?.percentile} homestate={body?.state} gender={body?.gender} category={body?.category} />
        </div>

        {/* College Card */}
        <div className="w-full lg:w-[48%] flex justify-center h-full">
          <CollegeCard rank={data?.rank} />
        </div>
      </section>
      
      {/* ✅ Fixed the prop name */}
      <ResultTable collegeData={data?.colleges} />
    </>
  );
}

export default ResultMainSection;
