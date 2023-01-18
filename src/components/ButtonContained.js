import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-4 py-3 uppercase text-white bg-mainOrange">
      {text}
    </button>
  );
};

export default Button;
