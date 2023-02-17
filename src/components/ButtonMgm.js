import React from "react";

export default function ButtonMgm({ text, contained }) {
  return (
    <>
      {contained ? (
        <button
          type="button"
          className="bg-mainOrange hover:text-mainOrange border-mainOrange text-white border-2  hover:bg-white focus:ring-4 focus:outline-none focus:ring-mainOrange-dark font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase transition-all ease-in-out duration-300"
        >
          {text}
        </button>
      ) : (
        <button
          type="button"
          className="text-mainOrange hover:text-white border-2 border-mainOrange hover:bg-mainOrange focus:ring-4 focus:outline-none focus:ring-mainOrange-dark font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase transition-all ease-in-out duration-300 "
        >
          {text}
        </button>
      )}
    </>
  );
}
