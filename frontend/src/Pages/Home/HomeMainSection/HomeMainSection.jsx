import React from "react";
import { motion } from "framer-motion";
import UserForm from "../Form/UserForm";
import students from "../Assets/students.png";
import layers from "./layers.png";

function HomeMainSection() {
  return (
    <>
      <section className="mainsection flex flex-row justify-center items-center gap-6 lg:pr-[10%] lg:pl-0 px-[16px] w-full relative overflow-clip">
        {/* Background Layer */}
        <img
          src={layers}
          alt=""
          className="background absolute -z-3 bottom-[-120px] right-[-220px]"
        />
        <img
          src={layers}
          alt=""
          className="background absolute -z-3 top-[-260px] left-[-220px] scale-[-1]"
        />

        {/* Left Content + Image in a single flex column */}
        <motion.div
          className="headingtext hidden lg:flex flex-col justify-between gap-12 items-stretch w-1/2 min-h-screen h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Text Section */}
          <div className="leftcontent flex flex-col w-full justify-start items-start gap-2 pl-[22%] flex-grow">
            <p className="heading font-semibold text-[47px] text-[#161b2d]">
              Worry about &nbsp;
              <span className="font-bold text-[#FF4E59]">College?</span>
            </p>
            <p className="description italic font-normal text-[14px] text-[#161b2db2]">
              “Our Platform will give you accurate college prediction to your
              rank or percentile”
            </p>
          </div>

          {/* Image Section */}
          <motion.div
            className="studentimage w-full scale-[1.25] z-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={students}
              alt="Students"
              className="bannerimg object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* User Form */}
        <motion.div
          className="userform w-full lg:w-1/2 flex flex-col justify-between"
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
