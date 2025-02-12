import React from "react";

function Button({ title }) {
  return (
    <>
      <button className="text-white flex gap-4 px-8 cursor-pointer justify-center items-center py-2 rounded-full h-[52px] font-bold bg-[#161B2D]">
        {title}

      </button>
    </>
  );
}

export default Button;
