import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import logoColored from "../img/logo-colored.svg";
import Accessibility from "./Accessibility";

const Navbar = () => {
  return (
    <div className="widest">
      <div className="bg-gray-100 py-2">
        <div className="flex justify-between inside ">
          <p className="text-sm">GOVPH</p>
          <div className="flex gap-8 mr-6 ">
            <Accessibility />
            {/* <p className="text-sm">Accessibility Statement</p> */}
            <div className="items-center flex">
              <Link className="text-sm text-mainText" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="items-center flex">
              <input placeholder="Search" className="px-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between inside py-3">
        <Link to="/">
          <img className="h-28" src={logoColored} alt="Logo" />
        </Link>
        <div className="flex flex-col justify-end">
          <div className="flex space-x-2 justify-end">
            <p>F</p>
            <p>Twitter</p>
          </div>
          <div className="flex mt-2 space-x-12">
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
