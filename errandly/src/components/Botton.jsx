import React from "react";

const Botton = ({ title, styles, img }) => {
  return (
    <>
      <button className={`p-2 ${styles}`}>
        {img && <img src={img} alt="" />}
        <p className={`text-center ${title.styles}`}>{title.name}</p>
      </button>
    </>
  );
};

export default Botton;
