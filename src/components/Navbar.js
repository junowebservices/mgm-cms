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

const Navbar = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div className="widest">
      <div className="bg-gray-100 py-2 px-4 md:px-0">
        <div className="flex justify-between items-center inside">
          <p className="text-xs md:text-sm font-arial">GOVPH</p>
          <div className="flex md:gap-8 md:mr-6 ">
            <Accessibility />
            <div className="hidden md:flex items-center ">
              <Link className="text-sm text-mainText font-arial" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <input placeholder="Search" className="px-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between inside py-3">
        <Link to="/">
          <img className="h-16 md:h-24 px-4" src={logoColored} alt="Logo" />
        </Link>
        <div className="flex flex-col justify-end px-4 gap-2">
          <div className="flex space-x-3 justify-end">
            {contact_info.facebook && (
              <a
                href={contact_info.facebook}
                className="text-mainText"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {contact_info.twitter && (
              <a
                href={contact_info.twitter}
                className="text-mainText"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            )}
            {contact_info.instagram && (
              <a
                href={contact_info.instagram}
                className="text-mainText"
                target="_blank"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </div>
          <div className="grid mt-2 space-x-12 place-content-end">
            <Link
              className={`${path === "/" && "font-bold"} text-mainText text-sm`}
              to="/"
            >
              HOME
            </Link>
            <Link
              className={`${path === "/about" && "font-bold"} text-mainText`}
              to="/about"
            >
              About
            </Link>
            {/* <Link
              className={`${path === "/calendar" && "font-bold"} text-mainText`}
              to="/calendar"
            >
              Calendar of Activities
            </Link> */}
            {/* <DownloadLink /> */}
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
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-xs md:text-sm text-mainText hover:font-bold">
            Download
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
    </div>
  );
};
