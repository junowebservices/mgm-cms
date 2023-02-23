import * as React from "react";
import { Link } from "gatsby";

import contact from "../../site/settings/contact_info.json";
import { FbIcon, IGIcon, SearchIcon, TwitterIcon } from "./Icons";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

// import LogoColoredIcon from "../img/logo-colored.svg";

const Footer = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  return (
    <footer className="widest border-t-2 border-secondaryTextColor">
      <div className="grid md:grid-cols-9 inside text-mainTextColor py-6 gap-2 gap-y-6">
        <div className="col-span-2">
          <h3 className="text-base font-bold">Telephone</h3>
          <p className="text-xs">{contact.telephone_1}</p>
          <p className="text-xs">{contact.telephone_2}</p>
        </div>
        <div className="col-span-2">
          <h3 className="text-base font-bold">Email</h3>
          <a
            className="text-xs text-mainTextColor"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </div>
        <div className="col-span-3 w-10/12">
          <h3 className="text-base font-bold">Address</h3>
          <a
            className="text-xs text-mainTextColor"
            href="https://goo.gl/maps/hLjq3q9nR4oDo22b8"
            target="_blank"
          >
            {contact.address}
          </a>
        </div>
        <div className="col-span-2 order-first md:order-last">
          <h3 className="ext-base font-bold">Search MGM</h3>
          <div className="relative">
            <input className="w-full bg-mainBg text-sm lg:text-base py-1 !pr-8 pl-3 " />
            <div className="absolute top-2 right-2 cursor-pointer">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-3 inside py-6 md:py-12 gap-4 md:gap-y-4">
        <div className="flex flex-col gap-4 md:gap-0 justify-between h-full">
          <div>
            <h3 className="text-base font-bold">Telephone</h3>
            <p className="text-xs">{contact.telephone_1}</p>
            <p className="text-xs">{contact.telephone_2}</p>
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
  
        </div>
     
     
        <h3 className="text-lg font-semibold hidden md:block">Search MGM</h3>
      </div> */}
      <div className="bg-mainBg">
        <div className="py-4 flex justify-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
          <div className="w-16 h-16 rounded-full bg-white"></div>
        </div>
        <div className="bg-secondaryBg mx-3">
          <div className="grid lg:grid-cols-12 py-12 inside gap-10">
            {/* Show only on Mobile */}
            <div className="w-full col-span-2 flex lg:hidden">
              <div className="w-20 lg:w-44">
                <PreviewCompatibleImage imageInfo={"/img/govph-seal.png"} />
              </div>
              <div className="w-20 lg:w-44">
                <PreviewCompatibleImage
                  imageInfo={"/img/govph-seal-mono.jpg"}
                />
              </div>
            </div>
            <div className="w-full col-span-2 hidden lg:block">
              <div className="w-44">
                <PreviewCompatibleImage
                  imageInfo={"/img/govph-seal-mono.jpg"}
                />
              </div>
            </div>

            <div className="w-full col-span-3">
              <p className="text-base font-bold text-secondaryTextColor mb-3">
                Republic of the Philippines
              </p>
              <p className="text-sm text-secondaryTextColor">
                All content is in the public domain unless otherwise stated.
              </p>
            </div>
            <div className="w-full col-span-3">
              <p className="text-base font-bold text-secondaryTextColor mb-3">
                National Commission for Culture and the Arts
              </p>
              <p className="text-sm text-secondaryTextColor">
                National Arts Month
                <br />
                National Literature Month
                <br />
                National Culinary Month
                <br />
                National Heritage Month
                <br />
                Libraries and Information Services Month
              </p>
            </div>
            <div className="col-span-4 justify-self-end hidden lg:block">
              <div className="w-44">
                <PreviewCompatibleImage imageInfo={"/img/govph-seal.png"} />
              </div>
            </div>
          </div>
        </div>

        <p className="bg-mainBg text-center block py-3 font-Roboto text-xs text-secondaryTextColor">
          © {year} Musems and Galleries Month. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
