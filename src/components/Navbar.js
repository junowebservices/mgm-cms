import React from "react";
import { Link } from "gatsby";

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
import ButtonMgm from "./ButtonMgm";
import { FbIcon, IGIcon, TwitterIcon } from "./Icons";

const Navbar = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <section className="widest">
      <div className="bg-gray-100 py-1">
        <div className="flex justify-between items-center inside">
          <p className="text-xs font-Arial">GOVPH</p>
          <div className="flex md:gap-8 md:mr-6 ">
            <Accessibility />
            <div className="hidden md:flex items-center ">
              <Link
                className="text-xs text-mainTextColor font-Arial"
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <input placeholder="Search" className="pl-2" />
            </div>
          </div>
        </div>
      </div>
      <section className="inside py-2">
        <div class="hidden md:grid grid-rows-2 grid-flow-col place-items-end">
          <div class="row-span-2 place-self-start">
            <Link to="/">
              <img src="/img/logo.png" className="w-48" />
            </Link>
          </div>
          <div class="col-span-2 mr-3">
            <div className="flex justify-end gap-4">
              {contact_info.facebook && (
                <a
                  href={`/${contact_info.facebook}`}
                  className="text-mainText"
                  target="_blank"
                >
                  <FbIcon />
                </a>
              )}
              {contact_info.twitter && (
                <a
                  href={contact_info.twitter}
                  className="text-mainText"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              )}
              {contact_info.instagram && (
                <a
                  href={contact_info.instagram}
                  className="text-mainText"
                  target="_blank"
                >
                  <IGIcon />
                </a>
              )}
            </div>
          </div>
          <div class="col-span-2 flex justify-end mb-2">
            <Link to="/">
              <button
                className={`${
                  path === "/" && "font-bold !text-mainOrange "
                }  h-6 w-[80px] text-sm text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark`}
              >
                Home
              </button>
            </Link>
            <Link to="/about">
              <button
                className={`${
                  path === "/about" && "font-bold !text-mainOrange "
                }  h-6 w-[80px] text-sm text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark`}
              >
                About
              </button>
            </Link>
            <Link to="/">
              <button
                className={`${
                  path === "/calendar" && "font-bold !text-mainOrange "
                }  h-6 w-[100px] text-sm text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark`}
              >
                Calendar
              </button>
            </Link>
            <Link to="/download">
              <button
                className={`${
                  path === "/download" && "font-bold !text-mainOrange "
                }  h-6 w-[100px] text-sm text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark`}
              >
                Download+
              </button>
            </Link>
            <Link to="/contact">
              <button
                className={`${
                  path === "/contact" && "font-bold !text-mainOrange "
                }  h-6 w-[80px] text-sm text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark`}
              >
                Contact
              </button>
            </Link>
            {/* <a
              href="#"
              className="h-6 w-[80px] text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark hover:font-bold"
            >
              About
            </a>
            <a
              href="#"
              className="h-6 w-[100px] text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark hover:font-bold"
            >
              Calendar
            </a>
            <a
              href="#"
              className="h-6 w-[100px] text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark hover:font-bold"
            >
              Download+
            </a>
            <a
              href="#"
              className="h-6 w-[80px] text-center text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark hover:font-bold"
            >
              Contact
            </a> */}
          </div>
        </div>
      </section>

      {/* <div className="hidden md:grid justify-between inside py-2">
        <Link to="/">
          <LogoColoredIcon className="w-full h-16 md:h-24" />
        </Link>
        <div className="flex flex-col justify-end  ">
          <div className="flex justify-end gap-4">
            {contact_info.facebook && (
              <a
                href={`/${contact_info.facebook}`}
                className="text-mainText"
                target="_blank"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            )}
            {contact_info.twitter && (
              <a
                href={contact_info.twitter}
                className="text-mainText"
                target="_blank"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            )}
            {contact_info.instagram && (
              <a
                href={contact_info.instagram}
                className="text-mainText"
                target="_blank"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <div className="grid grid-flow-col-dense col-auto mt-4 place-content-center border-2 w-full">
          <a
            href="#"
            className=" py-2 px-4 text-mainOrange font-bold transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark"
          >
            Home
          </a>
          <a
            href="#"
            className=" py-2 px-4 text-mainTextColor transition-all ease-in-out duration-300 underline-offset-4 hover:underline hover:text-mainOrange-dark hover:font-bold"
          >
            About
          </a>
        </div>
      </div>  */}
      {/* Mobile */}
      <div className="p-4 flex items-center md:hidden justify-between">
        <Link to="/">
          <img src="/img/logo.png" className="w-2/4" />
        </Link>
        <MobileNav path={path} />
      </div>
    </section>
  );
};

export default Navbar;

const DownloadLink = () => {
  return (
    // <div className="w-56 text-right">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <ButtonMgm text="DOWNLOAD" type="text" color="info" />
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
