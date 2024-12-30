"use client";

import Link from "next/link";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for toggle

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="header">
      <header className="text-gray-400">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          {/* Portfolio Name and Hamburger Icon in One Line for Small Screens */}
          <div className="flex w-full sm:w-auto items-center justify-between">
            <a className="flex title-font font-medium justify-center items-center text-black mb-4 sm:mb-0">
              <span className="ml-3 text-xl bg-fuchsia-500 w-40 h-9 flex justify-center items-center text-center border-2 border-black rounded text-lg">
                PORTFOLIO
              </span>
            </a>

            {/* Hamburger Icon for Small Screens */}
            <button
              onClick={toggleSidebar}
              className="sm:hidden text-2xl -mt-4 text-black focus:outline-none"
            >
              <FaBars />
            </button>
          </div>

          {/* Sidebar for Small Screens */}
          <nav
            className={`${
              isSidebarOpen ? "flex" : "hidden"
            } sm:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex-col items-center justify-center space-y-6`}
          >
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-3xl text-white"
            >
              <FaTimes />
            </button>
            <Link href={"/"}>
              <h1 className="text-white text-lg hover:text-fuchsia-500">
                HOME
              </h1>
            </Link>
            <Link href={"/about"}>
              <h1 className="text-white text-lg hover:text-fuchsia-500">
                ABOUT US
              </h1>
            </Link>
            <Link href={"/education"}>
              <h1 className="text-white text-lg hover:text-fuchsia-500">
                EDUCATION
              </h1>
            </Link>
            <Link href={"/projects"}>
              <h1 className="text-white text-lg hover:text-fuchsia-500">
                PROJECT{`'`}S
              </h1>
            </Link>
            <Link href={"/contact-us"}>
              <h1 className="text-white text-lg hover:text-fuchsia-500">
                CONTACT US
              </h1>
            </Link>
          </nav>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex md:ml-auto md:mr-auto flex-row text-white items-center text-base justify-center space-x-6">
            <Link href={"/"}>
              <h1 className="hover:text-fuchsia-500">HOME</h1>
            </Link>
            <Link href={"/about"}>
              <h1 className="hover:text-fuchsia-500">ABOUT US</h1>
            </Link>
            <Link href={"/education"}>
              <h1 className="hover:text-fuchsia-500">EDUCATION</h1>
            </Link>
            <Link href={"/projects"}>
              <h1 className="hover:text-fuchsia-500">PROJECT{`'`}S</h1>
            </Link>
            <Link href={"/contact-us"}>
              <h1 className="hover:text-fuchsia-500">CONTACT US</h1>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
