import React from "react";
import { useState, useEffect } from "react";
import { Sun } from "../Components/icons/Sun";
import { Moon } from "../Components/icons/Moon";
import logo2blanco from "../img/logo2blanco.png";
import logo2 from "../img/logo2.png";
import { Menu } from "./icons/Menu";
import Image from "next/image";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : "";
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${darkMode ? "dark" : ""}  min-h-16 py-4 px-4 lg:px-12 `}
    >
      <nav className="height-full flex justify-between items-center wrap relative py-2 px-4 md:px-10">
        <div>
          {darkMode ? (
            <Image
              width={200}
              height={200}
              className="w-16 md:w-28 transparent"
              src={logo2blanco.src}
              alt="Logo"
            />
          ) : (
            <Image
              className="w-20  md:w-28 transparent"
              width={200}
              height={200}
              src={logo2.src}
              alt="Logo"
            />
          )}
        </div>

        <label
          htmlFor="menu_hamburguesa"
          className=" absolute right-2 top-8 z-20 md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="text-gray-700  text-3xl cursor-pointer" />
        </label>
        <input
          type="checkbox"
          name=""
          className="menu_hamburguesa peer hidden "
          id="menu_hamburguesa"
        />

        <ul
          className={`${
            isMenuOpen ? "h-[calc(60vh-60px)]" : "h-0"
          } rounded-xl bg-gradient-to-r from-slate-950 to-blue-700 md:bg-none lg:bg-none md:static md:w-auto md:flex-row md:h-auto md:gap-1 h-0 w-full overflow-hidden absolute top-20 left-0 flex justify-center items-center flex-col gap-6 z-10 transition-all duration-200 ease-linear`}
        >
          <li className=" md:text-lg md:py-1 md:px-2">
            <a
              className=" text-3xl relative nav-a transition group md:text-xl text-neutral-200 md:text-neutral-900 dark:text-neutral-200   "
              href="#"
            >
              Home
            </a>
          </li>
          <li className=" md:text-lg md:py-1 md:px-2">
            <a
              className="text-3xl relative md:text-xl text-neutral-200 md:text-neutral-900 dark:text-neutral-200   nav-a transition group"
              href="#education"
            >
              Education
            </a>
          </li>
          <li className=" md:text-lg md:py-1 md:px-2">
            <a
              className=" relative text-3xl md:text-xl text-neutral-200 md:text-neutral-900 dark:text-neutral-200    nav-a transition group"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className=" md:text-lg md:py-1 md:px-2">
            <a
              className="text-3xl relative md:text-xl text-neutral-200 md:text-neutral-900 dark:text-neutral-200    nav-a transition group"
              href="#footer"
            >
              About
            </a>
          </li>
          <li>
            <button className="inline-block md:hidden  dark:text-neutral-200    max-w-max font-semibold text-neutral-900 p-2 text-2xl bg-slate-200 py-2 px-4 border border-slate-500 rounded-md shadow-md hover:brightness-125 cursor-pointer transition ">
              <a href="/CV.pdf" download>
                Hire Me
              </a>
            </button>
          </li>

          <li>
            <button className="inline-block md:hidden  font-semibold   text-neutral-700 bg-slate-50 p-2 rounded-md px-3   text-2xl  cursor-pointer hover:bg-slate-200 transition ">
              <a href="/CV.pdf" download>
                Download my CV
              </a>
            </button>
          </li>
        </ul>

        <div className="flex flex-row gap-4">
          <button className="hidden lg:inline-block shadow-neutral-500 dark:shadow-none dark:text-neutral-200  sm:text-sm md:text-lg lg:text-xl xl:text-xl   max-w-max font-semibold text-white p-2 text-2xl bg-blue-700 py-2 px-4 rounded-md shadow-md hover:brightness-125 cursor-pointer transition ">
            <a href="/CV.pdf" download>
              Hire Me
            </a>
          </button>
          <button className="hidden lg:inline-block shadow-md shadow-neutral-400 dark:shadow-none text-gray-600 bg-slate-50 rounded-md px-3   text-xs md:text-sm lg:text-md xl:text-lg cursor-pointer hover:bg-slate-200 transition ">
            <a href="/CV.pdf" download>
              Download my CV
            </a>
          </button>
        </div>

        <button
          className=" bg-slate-100 shadow-md shadow-slate-300 dark:shadow-none  border rounded-full text-neutral-800 w-16 h-16 hidden md:flex items-center justify-center "
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <Sun className="text-5xl " />
          ) : (
            <Moon className="text-5xl  " />
          )}
        </button>
      </nav>
    </header>
  );
}
