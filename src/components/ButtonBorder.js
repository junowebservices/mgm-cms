import React from "react";

const ButtonBorder = ({ text, color }) => {
  return (
    <button
      className={`py-2 uppercase border-2 bg-transparent px-4 border-${color} text-${color} md:min-w-[130px] font-semibold`}
    >
      {text}
    </button>
  );
};

export default ButtonBorder;
