import React from "react";

const ButtonBorder = ({ text, color }) => {
  return (
    <button
      className={`px-6 py-3 uppercase border-2 bg-transparent min-w-[130px] border-${color} text-${color}`}
    >
      {text}
    </button>
  );
};

export default ButtonBorder;
