import { useState } from "react";
import Button from "../../Button/Button";
import QuickChangeButtons from "../../Button/FormButtons/QuickChangeButtons";
import HomeStateSelect from "./HomeStateSelect";

const UserForm = () => {
  const [formData, setFormData] = useState({
    percentile: "",
    marks: "",
    homeState: "All India (Default)",
    pwd: "No",
    gender: "Male",
    sortBy: "College",
    category: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, 
    }));
  };

  const [active, setActive] = useState("By Percentile");

  return (
    <form
      className="w-full flex flex-col justify-start items-start lg:gap-4 gap-3 bg-white p-[32px] rounded-[16px] border-[2px] border-[#161b2d4a] md:px-[8%] px-[16px] "
      style={{
        boxShadow:
          "-17px 89px 25px 0px rgba(255, 78, 89, 0.00), -11px 57px 23px 0px rgba(255, 78, 89, 0.01), -6px 32px 20px 0px rgba(255, 78, 89, 0.02), -3px 14px 15px 0px rgba(255, 78, 89, 0.03), -1px 4px 8px 0px rgba(255, 78, 89, 0.04)",
      }}
    >
      <QuickChangeButtons
        handleChange={handleChange}
        formData={formData}
        active={active}
        setActive={setActive}
      />
  
      {/* Home State Dropdown */}
      <HomeStateSelect formData={formData} setFormData={setFormData}></HomeStateSelect>

      {/* PwD (Person With Disability) */}
      <fieldset className="mt-4">
        <legend className="block text-sm font-bold text-[#161B2D] md:text-[16px] text-[14px]">
          PwD (Person With Disability) <span className="text-[#FF4E59]">*</span>
        </legend>
        <div className="flex gap-4 mt-4">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name="pwd"
                value={option}
                checked={formData.pwd === option}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 border-[#FF4E59] rounded-full flex items-center justify-center ${
                  formData.pwd === option ? "border-6" : "bg-white"
                }`}
              />
              <span
                className={`text-[#161B2D] ${
                  formData.pwd === option ? "font-medium" : "font-normal"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Gender Selection */}
      <fieldset className="mt-4">
        <legend className="block text-sm font-bold text-[#161B2D] md:text-[16px] text-[14px]">
          Gender <span className="text-[#FF4E59]">*</span>
        </legend>
        <div className="flex gap-4 mt-4 ">
          {["Male", "Female"].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={formData.gender === option}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 border-[#FF4E59] rounded-full flex items-center justify-center ${
                  formData.gender === option ? "border-6" : "bg-white"
                }`}
              />
              <span
                className={`text-[#161B2D] ${
                  formData.gender === option ? "font-medium" : "font-normal"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Sort By Selection */}
      <fieldset className="mt-4">
        <legend className="block text-sm font-bold text-[#161B2D] md:text-[16px] text-[14px]">
          Sort By
        </legend>
        <div className="flex gap-4 mt-2">
          {["College", "Branch"].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name="sortBy"
                value={option}
                checked={formData.sortBy === option}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 border-[#FF4E59] rounded-full flex items-center justify-center ${
                  formData.sortBy === option ? "border-6" : "bg-white"
                }`}
              />
              <span
                className={`text-[#161B2D] ${
                  formData.sortBy === option ? "font-medium" : "font-normal"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Category Selection */}
      <fieldset className="mt-4">
        <legend className="block text-sm font-bold text-[#161B2D] md:text-[16px] text-[14px]">
          Category <span className="text-[#FF4E59]">*</span>
        </legend>
        <div className="flex flex-wrap md:flex-row w-full justify-start items-start gap-6 mt-4">
          {["General", "OBC", "EWS", "SC", "ST"].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={option}
                checked={formData.category === option}
                onChange={handleChange}
                className="hidden"
              />
              <div
                className={`w-5 h-5 border-2 border-[#FF4E59] rounded-full flex items-center justify-center ${
                  formData.category === option ? "border-6" : "bg-white"
                }`}
              />
              <span
                className={`text-[#161B2D] ${
                  formData.category === option ? "font-medium" : "font-normal"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Buttons */}
      <div className="mt-6 flex justify-evenly items-center w-full">
        <button
          type="button"
          onClick={() =>
            setFormData({
              percentile: "",
              homeState: "All India (Default)",
              pwd: "No",
              gender: "Male",
              sortBy: "College",
              category: "",
            })
          }
          className="text-[#161B2D] font-semibold cursor-pointer underline"
        >
          Clear
        </button>
        <Button title="Get Results"></Button>
      </div>
    </form>
  );
};

export default UserForm;
