import React from "react";
import { motion } from "framer-motion";
import UserForm from "../Form/UserForm";
import students from "../Assets/students.png";
import ap from "../Assets/AP.png";
import layers from "./layers.png";

function HomeMainSection() {
  return (
    <>
      <section className="mainsection flex flex-row justify-between items-stretch gap-6 lg:pr-[10%] lg:pl-0 px-[16px] w-full relative overflow-clip min-h-screen">
        {/* Background Layer */}
        <img
          src={layers}
          alt=""
          className="background absolute -z-3 bottom-[-120px] right-[-220px]"
        />
        <img
          src={layers}
          alt=""
          className="background absolute -z-3 top-[-240px] left-[-220px] scale-[-1]"
        />

        {/* Left Content + Image in a single flex column */}

        <motion.div
          className="headingtext hidden lg:flex flex-col justify-start gap-[82px] items-center w-[60%] min-h-screen"
          style={{ alignSelf: "stretch" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Text Section */}
          <div className="leftcontent flex flex-col w-full justify-between items-strech gap-2 z-10 lg:pl-[12%]">
            <p className="heading font-semibold text-[47px] text-[#161b2d]">
              Worry about &nbsp;
              <span className="font-bold text-[#FF4E59]">College?</span>
            </p>
            <p className="description italic font-normal text-[14px] text-[#161b2db2]">
              “Our Platform will give you accurate college prediction to your
              rank or percentile”
            </p>
          </div>

          {/* Image Container - Takes remaining space */}
          <div className="imageContainer w-fit h-fit">
            <img
              src={ap} // Replace with your actual image source
              alt="Students"
              className="w-fit h-fit object-contain lg:scale-[1.25] md:scale-1"
            />
          </div>
        </motion.div>

        {/* userform */}
        <motion.div
          className="userform w-full lg:w-1/2 flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <UserForm />
        </motion.div>
      </section>
    </>
  );
}

export default HomeMainSection;
