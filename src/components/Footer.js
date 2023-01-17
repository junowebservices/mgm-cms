import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import logoColored from "../img/logo-colored.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="widest">
        <div className="grid grid-cols-3 inside py-12 gap-y-4">
          <img className="w-72 h-40" src={logoColored} alt="Logo" />
          {/* <div className="w-[150px] h-[150px] bg-black">Logo</div> */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p>Telephone</p>
              <p>T123123213213213</p>
            </div>
            <div>
              <p>Email</p>
              <p>mgmsecretariat@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p>Address</p>
              <p>633 General</p>
            </div>
            <div>facebook</div>
          </div>
          {/* Row 2 */}
          <div className="w-full flex items-center">
            <div className="w-32 h-32 rounded-full bg-gray-400"></div>
          </div>
          <div>
            <p>Site map</p>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-xl">Home</p>
                <p className="text-xl">About</p>
                <p className="text-xl">Program</p>
                <p className="text-xl">Participate</p>
                <p className="text-xl">Contact</p>
              </div>
              <div>
                <p className="text-xl">FAQ</p>
                <p className="text-xl">Archives</p>
              </div>
            </div>
          </div>
          <p>Search</p>
        </div>
        <div className="bg-yellow-500">
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

          <span className="text-center block py-3">
            2022 Musems and Galleries Month. All rights reserved.
          </span>
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
  }
};

export default Footer;
