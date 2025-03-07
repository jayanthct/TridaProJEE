import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Center image
import apImage from "./assets/uni.png";

// University logos (replace with your actual images)
import uni1 from "./assets/uni.png";
import uni2 from "./assets/uni.png";
import uni3 from "./assets/uni.png";
import uni4 from "./assets/uni.png";
import uni5 from "./assets/uni.png";
import uni6 from "./assets/uni.png";
import uni7 from "./assets/uni.png";
import uni8 from "./assets/uni.png";

const innerLogos = [uni1, uni2, uni3, uni4];
const outerLogos = [uni5, uni6, uni7, uni8];

const MapAnimation = () => {
  // 1) Inner ring motion
  const innerAngle = useMotionValue(0);

  useEffect(() => {
    // Rotate from 0 to 360 continuously
    const controls = animate(innerAngle, 360, {
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    });
    // Cleanup if component unmounts
    return controls.stop;
  }, [innerAngle]);

  // 2) Outer ring motion
  const outerAngle = useMotionValue(0);

  useEffect(() => {
    // Rotate from 0 to -360 (opposite direction)
    const controls = animate(outerAngle, -360, {
      repeat: Infinity,
      duration: 18,
      ease: "linear",
    });
    return controls.stop;
  }, [outerAngle]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white p-8">
      {/* -- Center Image -- */}
      <div className="absolute z-10">
        <img src={apImage} alt="Center" className="w-42 h-42 object-contain" />
      </div>

      {/* -- Inner Circle (Static) -- */}
      <div className="absolute w-[400px] h-[400px] rounded-full border-[42px] border-green-200" />

      {/* -- Outer Circle (Static) -- */}
      <div className="absolute w-[600px] h-[600px] rounded-full border-[20px] border-green-600" />

      {/* -- Inner Logos Orbiting -- */}
      {innerLogos.map((logo, index) => {
        const offsetAngle = (360 / innerLogos.length) * index;
        const radius = 180; // Exact half of 400px (circle diameter)

        const x = useTransform(
          innerAngle,
          (v) => radius * Math.cos(((v + offsetAngle) * Math.PI) / 180)
        );
        const y = useTransform(
          innerAngle,
          (v) => radius * Math.sin(((v + offsetAngle) * Math.PI) / 180)
        );

        return (
          <motion.div
            key={index}
            style={{ x, y }}
            className="absolute top-1/2 left-1/2 w-24 h-24 flex justify-center items-center  -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        );
      })}

      {/* -- Outer Logos Orbiting -- */}
      {outerLogos.map((logo, index) => {
        // Each logo’s offset angle
        const offsetAngle = (360 / outerLogos.length) * index;
        const radius = 280; // Exact half of 600px (circle diameter)

        const x = useTransform(
          outerAngle,
          (v) => radius * Math.cos(((v + offsetAngle) * Math.PI) / 180)
        );
        const y = useTransform(
          outerAngle,
          (v) => radius * Math.sin(((v + offsetAngle) * Math.PI) / 180)
        );

        return (
          <motion.div
            key={index}
            style={{ x, y }}
            className="absolute top-1/2 left-1/2 w-24 h-24 flex justify-center items-center  -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default MapAnimation;
