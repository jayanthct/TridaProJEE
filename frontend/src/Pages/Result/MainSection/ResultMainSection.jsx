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
  const percentile = Math.min(100, Math.max(0, data?.percentile || 0));

  return (
    <>
      <button
        className="text-[#161B2D] flex gap-4 px-8 cursor-pointer justify-center items-center py-2 rounded-full h-[52px] font-bold border-2 border-[#161B2D] lg:ml-[10%] ml-[16px] -mb-0 lg:-mb-4 hover:bg-[#161b2d09]"
        onClick={() => navigate("/")}
      >
        <img src={back} alt="" className="w-8" /> Retry
      </button>

      <section className="resultmainsection flex flex-row gap-4 justify-center items-stretch px-[16px] py-[2%] w-full flex-wrap md:flex-nowrap">
        {/* Rank + MetaData section */}
        <div className="rankandmeta flex flex-col gap-4 w-fill">
          <RankCard
            rank={data?.rank }
            category={body?.category}
          />
          <MetaData
            percentile={percentile }
            homestate={body?.state}
            gender={body?.gender}
            category={body?.category}
          />
        </div>

        <div className="flex items-center lg:w-[42%] h-fit w-fit justify-center">
          <CollegeCard />
        </div>
      </section>

      {/* ✅ Fixed the prop name */}
      <ResultTable collegeData={data?.colleges} />
    </>
  );
}

export default ResultMainSection;
