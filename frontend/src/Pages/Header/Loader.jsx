import { motion } from "framer-motion";
import logo from "./Assets/SmallLogo.svg"

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative w-32 h-32 flex justify-center items-center">
        {/* Circular Spinner */}
        <motion.div
          className="absolute w-full h-full border-[6px] border-transparent border-t-[#FF4E59] border-b-[#FF4E59] rounded-full"
      
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        {/* Logo */}
        <img src={logo} alt="Logo" className="absolute w-12 h-12" />
      </div>
    </div>
  );
};

export default Loader;
