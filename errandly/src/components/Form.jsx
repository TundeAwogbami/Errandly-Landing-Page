import React from "react";

const Form = ({ title, type }) => {
  return (
    <>
      <input
        type={type}
        placeholder={title}
        className="p-2 text-white bg-transparent border rounded-lg outline-none border-purple"
      />
    </>
  );
};

export default Form;
