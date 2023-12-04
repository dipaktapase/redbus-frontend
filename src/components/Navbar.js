import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rdc-redbus-logo.svg";

const Navbar = () => {
  const navItems = [
    // { name: "Ticket", link: "" },
    // { name: "Contact Us", link: "about-us" },
    // { name: "Register", link: "" },
  ];

  const [isOpen, setOpen] = useState(true);

  return (
    <section className="relative w-full shadow-lg top-0 z-10 ">
      <div className="md:flex items-center justify-between bg-white md:px-8">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-grey-800">
          <a href="/">
            <img src={logo} alt="logo" className="h-24 w-24" />
          </a>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 md:mt-0 mt-4 mr-2 cursor-pointer md:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
              alt="dropdown"
              className="h-6 w-6"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
              alt="dropdown"
              className="h-6 w-6"
            />
          )}
        </div>
        <ul
          className={`md:flex md:items:center list-none md:pb-0 pb-4 pt-4 absolute md:static bg-white md:z-auto z-[-1] mt-0 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  duration-500 ease-in ${
            !isOpen ? "top-full" : "top-[-490px]"
          }`}
        >
          {navItems.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl p-2 md:my-0 my-3">
              {/* <Link
                to=""
                // spy={true}
                // smooth={true}
                // hashSpy={true}
                offset={-120}
                duration={500}
                className="text-grey-800 hover:text-grey-400 duration-500 cursor-pointer"
              > */}
                {link.name}
              {/* </Link> */}
            </li>
          ))}
          <button
            type="button"
            className="text-white py-2 bg-red-700 hover:bg-red-800 focus:outline-none text-sm px-8 text-center  border-none rounded-md dark:bg-red-600 dark:hover:bg-red-700"
          >
            Login
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
