import Select from "react-select";

const options = [
  { value: "all-india", label: "All India (Default)" },
  { value: "ap", label: "AP - Andhra Pradesh" },
  { value: "go", label: "GO - Goa" },
  { value: "jk", label: "JK - Jammu & Kashmir" },
  { value: "lk", label: "LK - Ladakh" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: 52,
    borderRadius: 6,
    paddingLeft: 4,
    boxShadow: "0px 1px 12px 0px rgba(255, 78, 89, 0.08)",
    border: "1px solid rgba(22, 27, 45, 0.16)",
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? "#FF4E59" : isFocused ? "#FF4E59" : "white",
    color: isSelected || isFocused ? "white" : "#161B2D",
    cursor: "pointer",
  }),
};

const HomeStateSelect = ({ formData, setFormData }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      width: "100%",
      height: "52px",
      marginTop: "-0.5rem",
      padding: "8px 16px",
      borderWidth: "1px",
      borderColor: state.isFocused ? "#ff4e5aa0" : "#161b2d29",
      borderRadius: "6px",
      backgroundColor: "white",
      cursor: "pointer",
      outline: state.isFocused ? "2px solid #ff4e5aa0" : "none",
      "&:hover": {
        outline: "1px solid #ff4e5a62",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "5px 0",
    }),
    option: (base, state) => ({
      ...base,
      padding: "10px 15px",
      backgroundColor: state.isSelected
        ? "#FF4E59"
        : state.isFocused
        ? "#FF4E59"
        : "white",
      color: "[#161b2d]",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#FF4E59",
        color:"white"
      },
    }),
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-bold text-[#161B2D] md:text-[16px] text-[14px] mb-4">
        Home State <span className="text-[#FF4E59]">*</span>
      </label>
      <Select
        styles={customStyles}
        options={options}
        styles={customStyles}
        placeholder="Select Home State"
        value={options.find((opt) => opt.value === formData.homeState)}
        onChange={(selectedOption) =>
          setFormData({ ...formData, homeState: selectedOption.value })
        }
      />
    </div>
  );
};

export default HomeStateSelect;
