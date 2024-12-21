import React from "react";
import { FullCircle } from "./icons/FullCircle";
import { CircleOutline } from "./icons/CircleOutline";
import css from "../img/programming-icons/css.svg";
import html from "../img/programming-icons/html.svg";
import javascript from "../img/programming-icons/javascript.svg";
import python from "../img/programming-icons/python.svg";
import react from "../img/programming-icons/react.svg";
import tailwindcss from "../img/programming-icons/tailwindcss.svg";

const Skills = () => {
  return (
    <section
      id="skills"
      className="  w-full mt-20   flex flex-col py-6 my-20 px-6 sm:px-8 lg:px-32"
    >
      <div>
        <h2 className="text-shadow font-montserrat text-neutral-900 dark:text-neutral-300  text-center mb-10 font-bold text-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          SKILLS
        </h2>
        <div className="grid mt-16 auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   ">
          <div className="flex flex-col items-start bg-slate-800 hover:scale-105 shadow-md  cursor-pointer   hover:brightness-110 transition rounded-lg p-6 border-blue-500 shadow-blue-500">
            <img
              className="w-32 place-self-center "
              src={html.src}
              alt="html"
            />
            <h1 className="text-white font-rubik   font-semibold sm:text-md md:text-xl lg:text-2xl">
              HTML5{" "}
            </h1>
            <h4 className="text-white   font-rubik text-lg mb-1 ">
              Level: Intermediate{" "}
            </h4>
            <div className="flex flex-row gap-1">
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col items-start bg-slate-800 hover:scale-105 shadow-md  cursor-pointer  hover:brightness-110 transition   rounded-lg p-6 border-blue-500 shadow-blue-500">
            <img className="w-32 place-self-center " src={css.src} alt="html" />
            <h1 className="text-white font-rubik font-semibold sm:text-lg md:text-xl lg:text-2xl">
              CSS3{" "}
            </h1>
            <h4 className="text-white  font-rubik text-lg mb-1 ">
              Level: Intermediate{" "}
            </h4>
            <div className="flex flex-row gap-1">
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col items-start bg-slate-800 hover:scale-105 shadow-md  cursor-pointer  hover:brightness-110 transition   rounded-lg p-6 border-blue-500 shadow-blue-500">
            <img
              className="w-32 place-self-center mb-2 "
              src={javascript.src}
              alt="html"
            />
            <h1 className="text-white  font-rubik font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Javascript{" "}
            </h1>
            <h4 className="text-white  font-rubik text-lg mb-1 ">
              Level: Beginner{" "}
            </h4>
            <div className="flex flex-row gap-1">
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-gray-400" />
              <FullCircle className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col items-start bg-slate-800 hover:scale-105 shadow-md cursor-pointer  hover:brightness-110 transition   rounded-lg p-6 border-blue-500 shadow-blue-500">
            <img
              className="w-32 place-self-center "
              src={react.src}
              alt="html"
            />
            <h1 className="text-white   font-rubik font-semibold sm:text-lg md:text-xl lg:text-2xl">
              React{" "}
            </h1>
            <h4 className="text-white  font-rubik text-lg mb-1 ">
              Level: Intermediate{" "}
            </h4>
            <div className="flex flex-row gap-1">
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-gray-400" />
              <FullCircle className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col items-start bg-slate-800 hover:scale-105 shadow-md  cursor-pointer  hover:brightness-110 transition   rounded-lg p-6 border-blue-500 shadow-blue-500">
            <img
              className="w-32 place-self-center "
              src={tailwindcss.src}
              alt="html"
            />
            <h1 className="text-white  font-rubik font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Tailwind CSS{" "}
            </h1>
            <h4 className="text-white  font-rubik text-lg mb-1 ">
              Level: Intermediate{" "}
            </h4>
            <div className="flex flex-row gap-1">
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col items-start bg-slate-800 hover:scale-105 shadow-md  cursor-pointer  hover:brightness-110 transition   rounded-lg p-6 border-blue-500 shadow-blue-500">
            <img
              className="w-32 place-self-center "
              src={python.src}
              alt="html"
            />
            <h1 className="text-white font-rubik font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Python{" "}
            </h1>
            <h4 className="text-white  font-rubik text-lg mb-1 ">
              Level: Beginner{" "}
            </h4>
            <div className="flex flex-row gap-1">
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-blue-300" />
              <FullCircle className="text-gray-400" />
              <FullCircle className="text-gray-400" />
              <FullCircle className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
