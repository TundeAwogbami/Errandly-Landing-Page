import React from "react";

const Form = ({ title, type, handleChange, name, value }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={title}
        className="p-2 text-white bg-transparent border rounded-lg outline-none border-purple"
        onChange={handleChange}
      />
    </>
  );
};

export default Form;
