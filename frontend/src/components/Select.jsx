import React from "react";

const Select = ({
  name,
  label,
  multiple,
  options,
  onChange,
  length,
  isLoading,
  id,
  questionIndex,
  formIndex,
}) => {
  return (
    <>
      <div className={formIndex !== questionIndex ? "hidden" : "block"}>
        <label className="text-4xl text-white transition-all">{label}</label>
        <select
          name={name}
          multiple={multiple}
          onChange={(event) => onChange(event, id)}
          disabled={isLoading}
          className="w-full p-2 mt-4 rounded-lg "
        >
          {length === 0 ? (
            <>
              <option value="" hidden default>
                Choose an option
              </option>
              <option value="Personal">For personal errands</option>
              <option value="Business">Deliveries for my business</option>
              <option value="Rider">I am delivery rider/company</option>
            </>
          ) : (
            <>
              <option value="" hidden default key={0}>
                Choose an option
              </option>
              {options.map((option, index) => (
                <option value={option} key={index + 1}>
                  {option}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
    </>
  );
};

export default Select;
