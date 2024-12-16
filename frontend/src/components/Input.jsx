import React, { useState } from "react";

const Input = ({ title, type, handleChange, name, value, isLoading, error }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setFocused(false);
    }
  };

  return (
    <>
      <div className="relative">
        <input
          id={name}
          disabled={isLoading}
          type={type}
          name={name}
          value={value}
          className={`p-2 pt-4 text-white bg-transparent border rounded-lg outline-none w-full ${
            error ? "border-red-700" : " border-purple"
          }`}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label
          htmlFor={name}
          className={`absolute text-white bottom-1/2 left-2 ${
            focused ? "text-xs top-0" : "translate-y-1/2"
          }`}
        >
          {title}
        </label>
      </div>
      {error && <p className="-mt-4 text-sm text-red-700 ">{error}</p>}
    </>
  );
};

export default Input;
