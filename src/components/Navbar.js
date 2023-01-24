import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import logoColored from "../img/logo-colored.svg";
import Accessibility from "./Accessibility";

const Navbar = () => {
  return (
    <div className="widest">
      <div className="bg-gray-100 py-2 px-2 md:px-0">
        <div className="flex justify-between items-center inside ">
          <p className="text-xs md:text-sm">GOVPH</p>
          <div className="flex md:gap-8 md:mr-6 ">
            <Accessibility />
            <div className="hidden md:flex items-center ">
              <Link className="text-sm text-mainText" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <input placeholder="Search" className="px-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between inside px-4 md:px-0 py-5 md:py-3">
        <Link to="/">
          <img className="h-16 md:h-28" src={logoColored} alt="Logo" />
        </Link>
        <div className="hidden md:flex flex-col justify-end">
          <div className="flex space-x-2 justify-end">
            <p>F</p>
            <p>Twitter</p>
          </div>
          <div className="hidden md:flex mt-2 space-x-12">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/program">Program</Link>
            <Link to="/participate">Participate</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
