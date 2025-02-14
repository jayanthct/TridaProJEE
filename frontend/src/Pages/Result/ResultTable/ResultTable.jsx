import React, { useState } from "react";

import { FaFlask, FaLaptopCode, FaWrench, FaBuilding } from "react-icons/fa";
import PaginationRounded from "../../PaginationRounded";

const collegeData = Array.from({ length: 80 }, (_, i) => ({
  id: i + 1,
  name: i < 40 ? "BITS" : "IIIT",
  location: i < 40 ? "Mesra" : "Agartala",
  branch: [
    "Chemical Engineering",
    "Computer Science and Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
  ][i % 4],
  icon: [<FaFlask />, <FaLaptopCode />, <FaWrench />, <FaBuilding />][i % 4],
}));

const ResultTable = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedColleges = collegeData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div className="overflow-x-auto px-[16px] md:px-[10%] py-[2%] w-full">
        <div className="heading mb-6 font-medium text-[21px]">
          As per the data obtained from &nbsp;{" "}
          <span className="font-bold text-[#FF4E59] text-[24px]">
            JOSSAA 2019
          </span>
          ,&nbsp; you might get:
        </div>
        <table className="w-full border-collapse">
          <tbody>
            {displayedColleges.map((college, index) => (
              <tr
                key={college.id}
                className={`${
                  index % 2 == 0 ? "bg-[#FFF9FA]" : "bg-white"
                } border-t-1 border-t-[#c5c8cc]`}
              >
                <td className="p-4 font-semibold">{index + 1}</td>
                <td className="p-4 text-[#FF4E59] font-bold gap-2">
                  {college.name}&nbsp;&nbsp;
                  <span className="text-[#161b2d] font-medium">
                    {college.location}
                  </span>
                </td>
                <td className="p-4 flex items-center gap-4 font-medium">
                  <span className="text-[#FF4E59] sm:flex hidden text-xl w-[52px] h-[52px] rounded-full bg-[#ff4e5a22] justify-center items-center">
                    {college.icon}
                  </span>
                  {college.branch}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <PaginationRounded
            count={Math.ceil(collegeData.length / itemsPerPage)}
            page={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default ResultTable;
