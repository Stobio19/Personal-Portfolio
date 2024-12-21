import React from "react";
import { MoneyDollarCircle } from "./icons/MoneyDollar";
import { ArrowRight } from "./icons/ArrowRight";
import logoutbweb from "../img/logoutbweb.svg";
import logocolomboweb from "../img/logocolomboweb.png";
import certificationAI from "../img/certificationAI.png";

const Education = () => {
    return (
        <section
        id="education"
        className=" container mx-auto mt-20  px-12 sm:px-16 lg:px-20 flex flex-col"
      >
        <h2 className="  font-montserrat text-neutral-800 dark:text-neutral-300 text-center mb-10 font-bold text-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          <span className="text-shadow">EDUCATION</span>
        </h2>
        <div className="features  grid grid-rows-1  mt-8 sm:grid-rows-1 md:grid-rows-1 lg:grid-cols-3  place-items-center gap-4">
          <div className="card shadow-lg shadow-gray-600 dark:shadow-none h-full w-full bg-slate-100 opacity-100 py-4 px-6 rounded-2xl">
            <div className=" p-1 h-auto mb-2  inline-block rounded-md">
              <img
                className="w-full max-w-64   object-contain"
                src={logoutbweb.src}
                alt=""
              />
              {/* <MoneyDollarCircle className="text-white  text-4xl " /> */}
            </div>

            <h4 className="text-zinc-800 font-semibold text-lg my-2">
              My currently major
            </h4>
            <span className="text-neutral-900  leading-6">
              I am an 9th-semester scholarhsip student of Systems and Computer
              Engineering at the Universidad Tecnológica de Bolívar.
            </span>
            <hr className=" border-black my-2" />
            <ul>
              <li></li>
              <li></li>
            </ul>
            <ol className="">
              <li className="text-neutral-800">
                - Engineering Systems and Computing Degree
              </li>
              <li className="text-neutral-800">- GPA: 4.24/5.0</li>
              <li className="text-neutral-800">- Feb 2021 - Present </li>
            </ol>
            <hr className="border-black  my-2" />
            <h4 className="font-semibold text-lg my-2 text-neutral-900">
              Relevant Courses
            </h4>
            <ul className="list-disc ml-5">
              <li className="text-neutral-800">Fundaments of Programming</li>
              <li className="text-neutral-800">Programming</li>
              <li className="text-neutral-800">
                Object Oriented Programming (OOP)
              </li>
              <li className="text-neutral-800">Data Structure</li>
              <li className="text-neutral-800">Algorithms and Complexity</li>
            </ul>
            <div className="flex mt-4 gap-1 items-center py-1 px-2 rounded-md bg-blue-700 hover:brightness-110	  tranisiton cursor-pointer max-w-fit ">
              <a href="#" className="text-white  ">
                Contact Me
              </a>
              <ArrowRight className="text-white  text-2xl" />
            </div>
          </div>

          <div className="card shadow-lg shadow-gray-600 dark:shadow-none w-full h-full bg-slate-100 opacity-100 py-4 px-6 rounded-2xl">
            <div className=" p-1   bg-slate-100  inline-block rounded-md">
              <img
                className="w-full max-w-64 object-contain"
                src={logocolomboweb.src}
                alt="Colombo"
              />
              {/* <MoneyDollarCircle className="text-white  text-4xl " /> */}
            </div>

            <h4 className="text-zinc-800 font-semibold text-lg my-2">
              English Course
            </h4>
            <p className="text-zinc-800 leading-6">
              I am a scholarship student at the Centro Colombo Americano where I
              first enrolled at level 7 and am currently enrolled in Level 12 of
              the English program.
            </p>
            <div className="flex mt-4 gap-1 items-center py-1 px-2 rounded-md bg-blue-700 hover:brightness-110	  tranisiton cursor-pointer max-w-fit ">
              <a href="#" className="text-white  ">
                Contact Me
              </a>
              <ArrowRight className="text-white  text-2xl" />
            </div>
          </div>

          <div className="card shadow-lg shadow-gray-600 dark:shadow-none w-full h-full bg-slate-100 opacity-100 py-4 px-6 rounded-2xl">
            <div className="  inline-block ">
              <img src={certificationAI.src} alt="" />
            </div>

            <h4 className="text-zinc-800 font-semibold text-lg my-2">
              Certification in Artificial Intelligence
            </h4>
            <p className="text-zinc-800 leading-6">
              Certification in Artificial Intelligence level intermediate.
            </p>
            <div className="flex mt-4 gap-1 items-center py-1 px-2 rounded-md bg-blue-700 hover:brightness-110	  tranisiton cursor-pointer max-w-fit ">
              <a href="#" className="text-white    ">
                Contact Me
              </a>
              <ArrowRight className="text-white  text-2xl" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Education;