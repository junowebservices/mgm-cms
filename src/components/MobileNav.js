import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowDownTrayIcon,
  Bars3BottomRightIcon,
  CalendarDaysIcon,
  CalendarIcon,
  HomeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { Link } from "gatsby";

const MobileNav = ({ path }) => {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-xs md:text-sm text-mainText">
            <Bars3BottomRightIcon className="h-7 w-7" />
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
          <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="px-1 py-1 space-y-1">
              <Link to="/">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <HomeIcon
                        className={`${
                          active || path === "/"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      Home
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/about">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/about"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <UserGroupIcon
                        className={`${
                          active || path === "/about"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      About
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/calendar">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/calendar"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <CalendarIcon
                        className={`${
                          active || path === "/calendar"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      Calendar
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/download">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/download"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <ArrowDownTrayIcon
                        className={`${
                          active || path === "/download"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      Download+
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/contact">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/contact"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <PhoneIcon
                        className={`${
                          active || path === "/contact"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      Contact
                    </button>
                  )}
                </Menu.Item>
              </Link>
              {/* <Link to="/program">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/program"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <Squares2X2Icon
                        className={`${
                          active || path === "/program"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      Program
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/participate">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/participate"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <CalendarDaysIcon
                        className={`${
                          active || path === "/participate"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      Participate
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/faq">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/faq"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <QuestionMarkCircleIcon
                        className={`${
                          active || path === "/faq"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      FAQ
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/contact">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active || path === "/contact"
                          ? "bg-mainOrange text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm my-1`}
                    >
                      <PhoneIcon
                        className={`${
                          active || path === "/contact"
                            ? "text-white"
                            : "text-mainOrange"
                        } mr-2 h-5 w-5 `}
                        aria-hidden="true"
                      />
                      Contact
                    </button>
                  )}
                </Menu.Item>
              </Link> */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MobileNav;
