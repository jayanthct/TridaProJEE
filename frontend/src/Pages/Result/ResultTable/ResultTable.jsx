import React from "react";
import { FaFlask, FaLaptopCode, FaWrench, FaBuilding } from "react-icons/fa";

const collegeData = [
  {
    id: 1,
    name: "BITS",
    location: "Mesra",
    branch: "Chemical Engineering",
    icon: <FaFlask />,
  },
  {
    id: 2,
    name: "BITS",
    location: "Mesra",
    branch: "Computer Science and Engineering",
    icon: <FaLaptopCode />,
  },
  {
    id: 3,
    name: "BITS",
    location: "Mesra",
    branch: "Mechanical Engineering",
    icon: <FaWrench />,
  },
  {
    id: 4,
    name: "IIIT",
    location: "Agartala",
    branch: "Computer Science and Engineering",
    icon: <FaLaptopCode />,
  },
  {
    id: 5,
    name: "IIIT",
    location: "Agartala",
    branch: "Mechanical Engineering",
    icon: <FaWrench />,
  },
  {
    id: 6,
    name: "IIIT",
    location: "Agartala",
    branch: "Chemical Engineering",
    icon: <FaFlask />,
  },
  {
    id: 7,
    name: "IIIT",
    location: "Agartala",
    branch: "Civil Engineering",
    icon: <FaBuilding />,
  },
];

const ResultTable = () => {
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
            {collegeData.map((college, index) => (
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
      </div>
    </>
  );
};

export default ResultTable;
