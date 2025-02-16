import React, { useState } from "react";
import PaginationRounded from "../../PaginationRounded";
import TableNotFound from "../../../../TableNotFound";

import {
  FaBuilding,
  FaFlask,
  FaWrench,
  FaLaptopCode,
  FaMicrochip,
  FaRobot,
  FaBolt,
  FaCog,
  FaAtom,
  FaGlobe,
  FaRocket,
  FaRuler,
  FaGraduationCap,
} from "react-icons/fa";

const iconMap = {
  "Civil Engineering": <FaBuilding />,
  "Bio Technology": <FaFlask />,
  "Chemical Engineering": <FaFlask />,
  "Production Engineering": <FaWrench />,
  "Computer Science and Engineering": <FaLaptopCode />,
  "Computer Science": <FaLaptopCode />,
  "Electronics and Communication Engineering": <FaMicrochip />,
  "Mechatronics Engineering": <FaRobot />,
  "Electrical and Electronics Engineering": <FaBolt />,
  "Electrical Engineering": <FaBolt />,
  "Mechanical Engineering": <FaCog />,
  "Metallurgical and Materials Engineering": <FaAtom />,
  "Materials Science and Engineering": <FaAtom />,
  "Materials Science and Metallurgical Engineering": <FaAtom />,
  "Mining Engineering": <FaGlobe />,
  "Aerospace Engineering": <FaRocket />,
  "Instrumentation and Control Engineering": <FaMicrochip />,
  "Electronics and Instrumentation Engineering": <FaMicrochip />,
  "Industrial Design": <FaRuler />,
  "Food Process Engineering": <FaFlask />,
  "Ceramic Engineering": <FaBuilding />,
  "Textile Technology": <FaBuilding />,
  "Bio Medical Engineering": <FaFlask />,
  "Mathematics and Computing": <FaLaptopCode />,
  "Physics": <FaAtom />,
  "Chemistry": <FaFlask />,
  "Life Science": <FaFlask />,
  "Smart Manufacturing": <FaCog />,
  "Information Technology": <FaLaptopCode />,
  "Engineering Physics": <FaAtom />,
  "Integrated Master of Science": <FaAtom />,

  // New branches from image
  "Materials and Metallurgical Engineering": <FaAtom />,
  "Production and Industrial Engineering": <FaWrench />,
  "Architecture": <FaBuilding />,
  "Computer Engineering": <FaLaptopCode />,
  "Electronics and Telecommunication Engineering": <FaMicrochip />,
  "Data Science and Artificial Intelligence": <FaLaptopCode />,
  "Integrated B. Tech.(IT) and MBA": <FaLaptopCode />,
  "Biotechnology and Biochemical Engineering": <FaFlask />,
};

const ResultTable = ({ collegeData = [] }) => {
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
      {collegeData.length === 0 ? (
        <TableNotFound />
      ) : (
        <div className="overflow-x-auto px-[16px] md:px-[10%] py-[2%] w-full">
          <div className="heading mb-6 font-medium text-[21px]">
            As per the data obtained from &nbsp;
            <span className="font-bold text-[#FF4E59] text-[24px]">
              JOSSAA 2019
            </span>
            ,&nbsp; you might get:
          </div>
          <table className="w-full border-collapse">
            <tbody>
              {displayedColleges.map((college, index) => {
                const branchName = college["Branch"];
                const instituteName = college["Institute"];
                const icon = Object.keys(iconMap).find((key) =>
                  branchName.includes(key)
                ) ? (
                  iconMap[
                    Object.keys(iconMap).find((key) => branchName.includes(key))
                  ]
                ) : (
                  <FaGraduationCap />
                );

                return (
                  <tr
                    key={`college-${startIndex + index}`} // Ensure unique key
                    className={`${
                      index % 2 === 0 ? "bg-[#FFF9FA]" : "bg-white"
                    } border-t-1 border-t-[#c5c8cc]`}
                  >
                    <td className="p-4 font-semibold">
                      {startIndex + index + 1}
                    </td>
                    <td className="p-4 text-[#FF4E59] font-bold gap-2">
                      {instituteName.split(" ")[0]}&nbsp;&nbsp;
                      <span className="text-[#161b2d] font-medium">
                        {instituteName.split(" ").slice(1).join(" ")}
                      </span>
                    </td>
                    <td className="p-4 flex items-center gap-4 font-medium">
                      <span className="text-[#FF4E59] sm:flex hidden text-xl w-[52px] h-[52px] rounded-full bg-[#ff4e5a22] justify-center items-center">
                        {iconMap[icon]}
                      </span>
                      {branchName}
                    </td>
                  </tr>
                );
              })}
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
      )}
    </>
  );
};

export default ResultTable;
