import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import logoColored from "../img/logo-colored.svg";
import Accessibility from "./Accessibility";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  Bars3BottomRightIcon,
  CalendarDaysIcon,
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import MobileNav from "./MobileNav";
import contact_info from "../../site/settings/contact_info.json";
import { Button, IconButton } from "@mui/material";
import { Facebook, Home, Instagram, Twitter } from "@mui/icons-material";
import ButtonBorder from "./ButtonBorder";

const Navbar = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="widest">
      <div className="bg-gray-100 py-2 px-4 md:px-0">
        <div className="flex justify-between items-center inside">
          <p className="text-xs font-arial">GOVPH</p>
          <div className="flex md:gap-8 md:mr-6 ">
            <Accessibility />
            <div className="hidden md:flex items-center ">
              <Link className="text-xs text-mainText font-arial" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <input placeholder="Search" className="px-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between inside py-2">
        <Link to="/">
          <img className="h-16 md:h-24 px-4" src={logoColored} alt="Logo" />
        </Link>
        <div className="flex flex-col justify-end px-4">
          <div className="flex justify-end">
            {contact_info.facebook && (
              <a
                href={`/${contact_info.facebook}`}
                className="text-mainText"
                target="_blank"
              >
                <IconButton color="primary" aria-label="twitter">
                  <Facebook />
                </IconButton>
              </a>
            )}
            {contact_info.twitter && (
              <a
                href={contact_info.twitter}
                className="text-mainText"
                target="_blank"
              >
                <IconButton color="primary" aria-label="twitter">
                  <Twitter />
                </IconButton>
              </a>
            )}
            {contact_info.instagram && (
              <a
                href={contact_info.instagram}
                className="text-mainText"
                target="_blank"
              >
                <IconButton color="primary" aria-label="twitter">
                  <Instagram />
                </IconButton>
              </a>
            )}
          </div>
          <div className="flex mt-2 items-center">
            <Link to="/">
              {path === "/" ? (
                <Button color="primary" sx={{ fontWeight: "semibold" }}>
                  Home
                </Button>
              ) : (
                <Button color="info">Home</Button>
              )}
            </Link>
            <Link to="/about">
              {path === "/about" ? (
                <Button color="primary" sx={{ fontWeight: "semibold" }}>
                  ABOUT
                </Button>
              ) : (
                <Button color="info">ABOUT</Button>
              )}
            </Link>

            {/* <Link
              className={`${path === "/calendar" && "font-bold"} text-mainText`}
              to="/calendar"
            >
              Calendar of Activities
            </Link> */}
            <DownloadLink />
            {/* <Link
              className={`${
                path === "/program" && "font-bold"
              } text-mainText`}
              to="/program"
            >
              Program
            </Link>
            <Link
              className={`${
                path === "/participate" && "font-bold"
              } text-mainText`}
              to="/participate"
            >
              Participate
            </Link>
            <Link
              className={`${
                path === "/faw" && "font-bold"
              } text-mainText`}
              to="/faq"
            >
              FAQ
            </Link> */}
            {/* <Link
              className={`${path === "/contact" && "font-bold"} text-mainText`}
              to="/contact"
            >
              Contact
            </Link> */}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="p-4 flex items-center md:hidden justify-between">
        <Link to="/">
          <img className="h-16 md:h-28" src={logoColored} alt="Logo" />
        </Link>
        <MobileNav path={path} />
      </div>
    </div>
  );
};

export default Navbar;

const DownloadLink = () => {
  return (
    // <div className="w-56 text-right">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <ButtonBorder text="DOWNLOAD" type="text" color="info" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            <Link to="/">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-mainOrange text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <HomeIcon
                      className={`${
                        active ? "text-white" : "text-mainOrange"
                      } mr-2 h-5 w-5 `}
                      aria-hidden="true"
                    />
                    {/* {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    HOME
                  </button>
                )}
              </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    // </div>
  );
};
