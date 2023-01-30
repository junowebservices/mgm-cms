import React from "react";

const ButtonBorder = ({ text, color }) => {
  return (
    <button
      className={`py-2 uppercase border-2 bg-transparent px-5 border-${color} text-${color}`}
    >
      {text}
    </button>
  );
};

export default ButtonBorder;
