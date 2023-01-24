import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      className={`px-4 py-3 uppercase text-white bg-${color} min-w-[150px]`}
    >
      {text}
    </button>
  );
};

export default Button;
