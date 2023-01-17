import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import logoColored from "../img/logo-colored.svg";

const Navbar = () => {
  return (
    <div className="widest">
      <div className="bg-gray-100 py-2">
        <div className="flex justify-between inside ">
          <p>GOVPH</p>
          <div className="flex gap-8 mr-6">
            <p>Menu</p>
            <p>Contact Us</p>
            <p>Search</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between inside py-3">
        <img className="h-28" src={logoColored} alt="Logo" />
        <div className="flex flex-col justify-end">
          <div className="flex space-x-2 justify-end">
            <p>facebook</p>
            <p>Twitter</p>
          </div>
          <div className="flex mt-2 space-x-12">
            <p>Home</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
