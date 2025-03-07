import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "./Assets/tridapro.svg";

function NavBar() {
  // Animation Variants
  const slideDown = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.nav
        className="navbar flex justify-between items-start px-[2%] md:px-[4%] py-[2%] w-full mt-2"
        initial="hidden"
        animate="visible"
        variants={slideDown} // Slide down animation
      >
        <div className="logo w-fit -ml-5 md:-ml-1 scale-[0.8] md:scale-[1]">
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="content flex flex-col justify-end items-end relative gap-2 md:scale-[1] scale-[0.8]">
          <span className="box absolute w-[120px] h-[42px] md:w-[160px] md:h-[60px] bg-[#FF4E59] bottom-[4px] right-0 -z-10"></span>
          <p className="heading font-medium text-[#161B2D] text-[21px] md:text-[27px] text-right leading-8">
            <span className="font-bold text-[#FF4E59] text-[27px] md:text-[36px]">
              JEE
            </span>
            &nbsp;Rank Predictor
          </p>
          <p className="year text-white font-extrabold text-[36px] md:text-[47px] -mt-4">
            2025<span className="text-[#FF4E59]">I</span>
          </p>
        </div>
      </motion.nav>
    </>
  );
}

export default NavBar;
