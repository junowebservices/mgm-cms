import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { Link } from "gatsby";

import contact from "../../../site/settings/contact_info.json";
import {
  FbIcon,
  IGIcon,
  SearchIcon,
  TwitterIcon,
} from "../../components/Icons";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="widest mt-12">
          <div className="inside">
            <div className="">
              <h2 className="text-2xl lg:text-5xl font-bold my-6 text-mainTextColor ">
                Contact Us
              </h2>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <div className="flex gap-4 flex-col">
                    <div>
                      <input
                        className="w-full bg-mainBg text-sm lg:text-base p-3 "
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                        placeholder="Name*"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Department/Agency"
                        className="w-full bg-mainBg text-sm lg:text-base p-3"
                        type={"text"}
                        name={"agency"}
                        onChange={this.handleChange}
                        id={"agency"}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Email Address*"
                        className="w-full bg-mainBg text-sm lg:text-base p-3"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Message*"
                      className="w-full h-full bg-mainBg text-sm lg:text-base p-3 min-h-[150px]"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <button
                    className="bg-mainOrange hover:text-mainOrange border-mainOrange text-white mt-3 mb-5 border-2  hover:bg-white focus:ring-4 focus:outline-none focus:ring-mainOrange-dark font-medium text-sm px-5 py-1.5 text-center uppercase transition-all ease-in-out duration-300"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="border-t-2 border-secondaryTextColor">
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
          </div>
        </section>
      </Layout>
    );
  }
}
