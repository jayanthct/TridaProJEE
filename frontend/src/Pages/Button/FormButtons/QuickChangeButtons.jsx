import React, { useState } from "react";

function QuickChangeButtons({ formData, handleChange }) {
  const [active, setActive] = useState("By Percentile");

  return (
    <>
      <div className="quickchangebuttons flex w-full justify-around items-center gap-2 mt-2 bg-[#ff4e5a3b] lg:p-2 p-3 rounded-full mb-4">
        <button
          className={`flex gap-4 px-8 cursor-pointer justify-center items-center w-full py-2 rounded-full text-[14px] lg:text-[16px] h-[52px] font-bold transition-all ${
            active === "By Percentile"
              ? "bg-[#FF4E59] text-white"
              : "bg-white text-[#161b2d] border border-[#FF4E59]"
          }`}
          onClick={() => setActive("By Percentile")}
        >
          By Percentile
        </button>

        <button
          className={`flex gap-4 px-8 cursor-pointer justify-center items-center w-full py-2 rounded-full h-[52px] lg:text-[16px] text-[14px] font-bold transition-all ${
            active === "By Marks"
              ? "bg-[#FF4E59] text-white"
              : "bg-white text-[#161b2d] border border-[#FF4E59]"
          }`}
          onClick={() => setActive("By Marks")}
        >
          By Marks
        </button>
      </div>

      {/* Conditionally Render Inputs */}
      {active === "By Marks" && (
        <>
          <label className="block text-sm font-bold text-[#161B2D] md:text-[16px] text-[14px]">
            Marks <span className="font-normal text-[14px]">(out of 300)</span>{" "}
            <span className="text-[#FF4E59]">*</span>
          </label>
          <input
            required
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            min={0}
            max={300}
            placeholder="Enter Marks"
            className="w-full h-[52px] -mt-2 p-2 pl-4 border-1 border-[#161b2d29] rounded-[6px] bg-white cursor-text hover:outline-1 hover:outline-[#ff4e5a62] focus:outline-2 focus:outline-[#ff4e5aa0]"
            style={{
              boxShadow: "0px 1px 12px 0px rgba(255, 78, 89, 0.08)",
            }}
          />
        </>
      )}

      {active === "By Percentile" && (
        <>
          <label className="block text-sm font-bold text-[#161B2D] md:text-[16px] text-[14px]">
            Percentile <span className="font-normal text-[14px]">(out of 100)</span>{" "}
            <span className="text-[#FF4E59]">*</span>
          </label>
          <input
            required
            type="number"
            name="percentile"
            value={formData.percentile}
            onChange={handleChange}
            min={0}
            max={100}
            placeholder="Enter Percentile"
            className="w-full h-[52px] -mt-2 p-2 pl-4 border-1 border-[#161b2d29] rounded-[6px] bg-white cursor-text hover:outline-1 hover:outline-[#ff4e5a62] focus:outline-2 focus:outline-[#ff4e5aa0] "
            style={{
              boxShadow: "0px 1px 12px 0px rgba(255, 78, 89, 0.08)",
            }}
          />
        </>
      )}
    </>
  );
}

export default QuickChangeButtons;
