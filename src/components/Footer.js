import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import logoColored from "../img/logo-colored.svg";
import vimeo from "../img/social/vimeo.svg";
import contact from "../../site/settings/contact_info.json";

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
          <div className="flex space-x-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
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
