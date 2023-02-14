import * as React from "react";
import { Link } from "gatsby";

import contact from "../../site/settings/contact_info.json";

import LogoColoredIcon from "../img/logo-colored.svg";
import FacebookIcon from "../img/facebook.svg";
import TwitterIcon from "../img/twitter.svg";
import InstagramIcon from "../img/instagram.svg";

const Footer = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  return (
    <footer className="widest border-t-2 border-mainText">
      <div className="grid md:grid-cols-3 inside py-6 md:py-12 gap-4 md:gap-y-4">
        <LogoColoredIcon className="w-full h-16 md:h-24" />
        <div className="flex flex-col gap-4 md:gap-0 justify-between h-full">
          <div>
            <h3 className="font-semibold text-lg font-Roboto">Telephone</h3>
            <p>{contact.telephone_1}</p>
            <p>{contact.telephone_2}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg font-Roboto">Email</h3>
            <a href={`mailto:${contact.email}`} className="text-mainText">
              {contact.email}
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-semibold text-lg font-Roboto">Address</h3>
            <a
              href="https://goo.gl/maps/hLjq3q9nR4oDo22b8"
              target="_blank"
              className="text-mainText"
            >
              {contact.address}
            </a>
          </div>
          <div className="flex gap-4">
            {contact.facebook && (
              <a
                href={`/${contact.facebook}`}
                className="text-mainText"
                target="_blank"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            )}
            {contact.twitter && (
              <a
                href={contact.twitter}
                className="text-mainText"
                target="_blank"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
            )}
            {contact.instagram && (
              <a
                href={contact.instagram}
                className="text-mainText"
                target="_blank"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-32 h-32 rounded-full bg-gray-400"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg font-Roboto">Site map</h3>
          <div className="grid grid-cols-2">
            <div>
              <div>
                <Link to="/" className="text-mainOrange">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/" className="text-mainOrange">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold hidden md:block">Search</h3>
      </div>
      <div className="bg-mainYellow hidden md:block">
        <div className="py-6 flex justify-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
        </div>
        <div className="bg-white mx-3">
          <div className="grid grid-cols-4 py-12 inside">
            <div className="w-32 h-32 rounded-full bg-gray-400"></div>
            <p>sample</p>
            <p>sample</p>
            <p>sample</p>
          </div>
        </div>

        <p className="text-center block py-3 font-Roboto text-sm font-bold">
          © {year} Musems and Galleries Month. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
