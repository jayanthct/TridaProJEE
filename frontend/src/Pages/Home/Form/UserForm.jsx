import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import QuickChangeButtons from "../../Button/FormButtons/QuickChangeButtons";
import HomeStateSelect from "./HomeStateSelect";

import Loader from "../../Header/Loader";

const UserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    percentile: "",
    marks: "",
    homeState: "All India",
    pwd: "NO",
    gender: "M",
    sortby: "Institute",
    category: "GEN",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    setLoading(true); // Show loader

    try {
      const body = {
        marks: formData.marks ? parseFloat(formData.marks) : undefined,
        percentile: formData.percentile
          ? parseFloat(formData.percentile)
          : undefined,
        state: formData.homeState,
        pwd: formData.pwd,
        gender: formData.gender,
        category: formData.category,
        sortby: formData.sortBy,
      };
      const url = "http://127.0.0.1:5000/predict";
      const res = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200 || res.status === 201) {
        setTimeout(() => {
          setLoading(false);
          navigate("/result", { state: { data: res.data, body } }); // Pass data to result page
        }, 2500);
      } else {
        toast.error("Unexpected Error, Please Try Again!", {
          className: "custom-toast",
          style: { background: "white", color: "red" },
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server Down, Please Try Again!", {
        className: "custom-toast",
        style: { background: "white", color: "red" },
      });
      setLoading(false);
    }
  };
  const [active, setActive] = useState("By Percentile");

  return (
    <>
      {loading ? (
       <div className="fixed top-0 left-0 w-full h-full min-h-screen flex items-center justify-center bg-white bg-opacity-90 sm:bg-opacity-80 md:bg-opacity-75 z-50">
       <Loader />
     </div>
     
      ) : (
        <form
          className="w-full flex flex-col justify-start items-start lg:gap-4 gap-3 bg-white p-[32px] rounded-[16px] border-[2px] border-[#161b2d4a] md:px-[8%] px-[16px] z-30"
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
          <HomeStateSelect
            formData={formData}
            setFormData={setFormData}
          ></HomeStateSelect>

          {/* PwD (Person With Disability) */}
          <fieldset className="mt-4">
            <legend className="block text-sm font-bold text-primary md:text-[16px] text-[14px]">
              PwD (Person With Disability){" "}
              <span className="text-secondary">*</span>
            </legend>
            <div className="flex gap-4 mt-4">
              {["YES", "NO"].map((option) => (
                <label key={option} className="flex items-center space-x-2  cursor-pointer">
                  <input
                    type="radio"
                    name="pwd"
                    value={option}
                    checked={formData.pwd === option}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 border-2 border-secondary rounded-full flex items-center justify-center ${
                      formData.pwd === option ? "border-6" : "bg-white"
                    }`}
                  />
                  <span
                    className={`text-primary ${
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
            <legend className="block text-sm font-bold text-primary md:text-[16px] text-[14px]">
              Gender <span className="text-secondary">*</span>
            </legend>
            <div className="flex gap-4 mt-4 ">
              {["M", "F"].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 border-2 border-secondary rounded-full flex items-center justify-center ${
                      formData.gender === option ? "border-6" : "bg-white"
                    }`}
                  />
                  <span
                    className={`text-primary ${
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
            <legend className="block text-sm font-bold text-primary md:text-[16px] text-[14px]">
              Sort By
            </legend>
            <div className="flex gap-4 mt-2">
              {["Institute", "Branch"].map((option) => (
                <label key={option} className="flex items-center space-x-2  cursor-pointer">
                  <input
                    type="radio"
                    name="sortby"
                    value={option}
                    checked={formData.sortby === option}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 border-2 border-secondary rounded-full flex items-center justify-center ${
                      formData.sortby === option ? "border-6" : "bg-white"
                    }`}
                  />
                  <span
                    className={`text-primary ${
                      formData.sortby === option ? "font-medium" : "font-normal"
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
            <legend className="block text-sm font-bold text-primary md:text-[16px] text-[14px]">
              Category <span className="text-secondary">*</span>
            </legend>
            <div className="flex flex-wrap md:flex-row w-full justify-start items-start gap-6 mt-4">
              {["GEN", "OBC-NCL", "EWS", "SC", "ST"].map((option) => (
                <label key={option} className="flex items-center space-x-2  cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={option}
                    checked={formData.category === option}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 border-2 border-secondary rounded-full flex items-center justify-center ${
                      formData.category === option ? "border-6" : "bg-white"
                    }`}
                  />
                  <span
                    className={`text-primary ${
                      formData.category === option
                        ? "font-medium"
                        : "font-normal"
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
                  marks: "",
                  homeState: "All India",
                  pwd: "NO",
                  gender: "M",
                  sortby: "Institute",
                  category: "GEN",
                })
              }
              className="text-primary font-semibold cursor-pointer underline"
            >
              Clear
            </button>
            <button
              className="text-white flex gap-4 px-8 cursor-pointer justify-center items-center py-2 rounded-full h-[52px] font-bold bg-primary hover:scale-[0.9] transition-all ease-in duration-200"
              onClick={(e) => handleSubmit(e)}
            >
              Get Results
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default UserForm;
