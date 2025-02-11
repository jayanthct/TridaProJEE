import React from "react";
import design from "./Assets/design.svg";
import CountUp from './CountUp'

function RankCard() {
  return (
    <>
      <section
        className="rankcard relative bg-white flex flex-col justify-center items-center px-[16px] py-[36px] border-[2px] lg:w-full w-full h-full border-[#161b2d4a] rounded-[12px] gap-2 overflow-clip"
        style={{
          boxShadow:
            "-17px 89px 25px 0px rgba(255, 78, 89, 0.00), -11px 57px 23px 0px rgba(255, 78, 89, 0.01), -6px 32px 20px 0px rgba(255, 78, 89, 0.02), -3px 14px 15px 0px rgba(255, 78, 89, 0.03), -1px 4px 8px 0px rgba(255, 78, 89, 0.04)",
        }}
      >
        <img src={design} alt="" className="absolute top-0 right-0" />
        <img
          src={design}
          alt=""
          className="absolute bottom-0 left-0 rotate-180"
        />

        <div className="text flex flex-col justify-center items-center">
          <h1 className="heading font-bold text-[#FF4E59] text-[32px]">
            Congratulations!
          </h1>
          <p className="description font-medium text-[#161b2dad] text-[21px]">
            Your expected GEN rank
          </p>
        </div>

        <div className="rank">
          <p className="rank font-extrabold text-[#161b2d] text-[82px] lg:text-[98px]">
            8774
          </p>
          {/* <CountUp
            from={8763}
            to={9643}
            separator=","
            direction="up"
            duration={1}
            className="rank font-extrabold text-[#161b2d] text-[82px] lg:text-[98px] count-up-text"
          /> */}
        </div>

        <div className="desclaimer flex w-full justify-end items-end">
          <p className="description text-end font-light italic text-[#161b2d69] text-[14px] w-[20ch]">
            *This is a prediction according to previous trends
          </p>
        </div>
      </section>
    </>
  );
}

export default RankCard;
