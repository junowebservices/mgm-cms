import * as React from "react";
import { Link } from "gatsby";

import { Facebook, Home, Instagram, Twitter } from "@mui/icons-material";
import logoColored from "../img/logo-colored.svg";
import contact from "../../site/settings/contact_info.json";
import { IconButton } from "@mui/material";

const Footer = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  return (
    <footer className="widest border-t-2 border-mainText">
      <div className="grid md:grid-cols-3 inside px-4 md:px-0 py-6 md:py-12 gap-4 md:gap-y-4">
        <img className="h-16 md:h-40" src={logoColored} alt="Logo" />
        <div className="flex flex-col gap-4 md:gap-0 justify-between h-full">
          <div>
            <h3 className="font-semibold text-lg font-roboto">Telephone</h3>
            <p>{contact.telephone_1}</p>
            <p>{contact.telephone_2}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg font-roboto">Email</h3>
            <a href={`mailto:${contact.email}`} className="text-mainText">
              {contact.email}
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-semibold text-lg font-roboto">Address</h3>
            <a
              href="https://goo.gl/maps/hLjq3q9nR4oDo22b8"
              target="_blank"
              className="text-mainText"
            >
              {contact.address}
            </a>
          </div>
          <div className="flex -ml-4">
            {contact.facebook && (
              <a
                href={`/${contact.facebook}`}
                className="text-mainText"
                target="_blank"
              >
                <IconButton color="primary" aria-label="twitter">
                  <Facebook />
                </IconButton>
              </a>
            )}
            {contact.twitter && (
              <a
                href={contact.twitter}
                className="text-mainText"
                target="_blank"
              >
                <IconButton color="primary" aria-label="twitter">
                  <Twitter />
                </IconButton>
              </a>
            )}
            {contact.instagram && (
              <a
                href={contact.instagram}
                className="text-mainText"
                target="_blank"
              >
                <IconButton color="primary" aria-label="twitter">
                  <Instagram />
                </IconButton>
              </a>
            )}
          </div>
        </div>
        {/* Row 2 */}
        <div className="w-full flex items-center">
          <div className="w-32 h-32 rounded-full bg-gray-400"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg font-roboto">Site map</h3>
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
              {/* <div>
                <Link to="/" className="text-mainOrange">
                  Program
                </Link>
              </div>
              <div>
                <Link to="/" className="text-mainOrange">
                  Participate
                </Link>
              </div>
              <div>
                <Link to="/" className="text-mainOrange">
                  Contact
                </Link>
              </div> */}
            </div>
            {/* <div>
              <div>
                <Link to="/faq" className="text-mainOrange">
                  FAQ
                </Link>
              </div>
              <div>
                <Link to="/archives" className="text-mainOrange">
                  Archives
                </Link>
              </div>
            </div> */}
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

        <p className="text-center block py-3 font-roboto text-sm font-bold">
          © {year} Musems and Galleries Month. All rights reserved.
        </p>
      </div>
    </footer>
    // <footer className="footer has-background-black has-text-white-ter">
    //   <div className="content has-text-centered">
    //     <img
    //       src={logo}
    //       alt="Kaldi"
    //       style={{ width: "14em", height: "10em" }}
    //     />
    //   </div>
    //   <div className="content has-text-centered has-background-black has-text-white-ter">
    //     <div className="container has-background-black has-text-white-ter">
    //       <div style={{ maxWidth: "100vw" }} className="columns">
    //         <div className="column is-4">
    //           <section className="menu">
    //             <ul className="menu-list">
    //               <li>
    //                 <Link to="/" className="navbar-item">
    //                   Home
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="navbar-item" to="/about">
    //                   About
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="navbar-item" to="/products">
    //                   Products
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="navbar-item" to="/contact/examples">
    //                   Form Examples
    //                 </Link>
    //               </li>
    //               <li>
    //                 <a
    //                   className="navbar-item"
    //                   href="/admin/"
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                 >
    //                   Admin
    //                 </a>
    //               </li>
    //             </ul>
    //           </section>
    //         </div>
    //         <div className="column is-4">
    //           <section>
    //             <ul className="menu-list">
    //               <li>
    //                 <Link className="navbar-item" to="/blog">
    //                   Latest Stories
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="navbar-item" to="/contact">
    //                   Contact
    //                 </Link>
    //               </li>
    //             </ul>
    //           </section>
    //         </div>
    //         <div className="column is-4 social">
    //           <a title="facebook" href="https://facebook.com">
    //             <img
    //               src={facebook}
    //               alt="Facebook"
    //               style={{ width: "1em", height: "1em" }}
    //             />
    //           </a>
    //           <a title="twitter" href="https://twitter.com">
    //             <img
    //               className="fas fa-lg"
    //               src={twitter}
    //               alt="Twitter"
    //               style={{ width: "1em", height: "1em" }}
    //             />
    //           </a>
    //           <a title="instagram" href="https://instagram.com">
    //             <img
    //               src={instagram}
    //               alt="Instagram"
    //               style={{ width: "1em", height: "1em" }}
    //             />
    //           </a>
    //           <a title="vimeo" href="https://vimeo.com">
    //             <img
    //               src={vimeo}
    //               alt="Vimeo"
    //               style={{ width: "1em", height: "1em" }}
    //             />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
