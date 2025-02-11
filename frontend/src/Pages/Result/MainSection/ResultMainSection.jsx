import React from "react";
import CollegeCard from "../CollegeCard/CollegeCard";
import MetaData from "../MetaDeta/MetaDeta";
import RankCard from "../RankCard/RankCard";

function ResultMainSection() {
  return (
    <div className="resultmainsection flex flex-wrap md:flex-row sm:flex-col gap-4 justify-center items-stretch px-[16px] md:px-[10%] py-[2%] w-full">
    {/* Rank + MetaData section */}
    <div className="rankandmeta flex flex-col w-full lg:w-[48%] h-full gap-4 justify-between items-center flex-grow">
      <RankCard />
      <MetaData />
    </div>
  
    {/* College Card */}
    <div className="w-full lg:w-[48%] flex justify-center h-full">
      <CollegeCard />
    </div>
  </div>
  
  );
}

export default ResultMainSection;
