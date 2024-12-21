import React from "react";
import logo2blanco from "../img/logo2blanco.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className=" w-full pt-6  px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-900 dark:bg-transparent "
    >
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-8 py-12">
        <div className="col-span-1 flex flex-col items-center text-center  ">
          <Image
            width={200}
            height={200}
            className="w-28"
            src={logo2blanco.src}
            alt="logo"
          />
          <p className="font-montserrat text-neutral-100 text-sm sm:text-base">
            I am a person passionate about computing and technology, and I
            greatly enjoy learning about topics related to this field.
          </p>
        </div>
        <div className="  flex flex-col items-center text-center   ">
          <h4 className="font-semibold mb-2 text-xl font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
            Company
          </h4>
          <div className="flex flex-col justify-start gap-3 ">
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              Business
            </p>
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              Network
            </p>
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              Partnertship
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center   ">
          <h4 className="font-semibold mb-2 text-xl font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
            About Me
          </h4>
          <div className="flex flex-col  justify-start gap-3">
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              Blogs
            </p>
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              Channels
            </p>
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              Sponsors
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center  ">
          <h4 className="font-semibold mb-2 text-xl font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer ">
            Contact
          </h4>
          <div className="flex flex-col justify-start gap-3">
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              sleonardot@gmail.com
            </p>
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              sleonardot2@gmail.com
            </p>
            <p className="font-montserrat text-neutral-100 hover:text-blue-500 dark:text-neutral-100 transition-colors duration-200 cursor-pointer">
              (+57) 311 222 5980
            </p>
          </div>
        </div>
      </div>

      <p className="text-white text-center py-4">
        Copyright 2024 Samuel Tobio. All Rights Reserved.
      </p>
    </footer>
  );
}
