import React from "react";
import main from "../img/main.svg";
import Image from "next/image";

export default function Main() {
  return (
    <main className="py-8 md:py-12 relative grid grid-cols-1 lg:grid-cols-2 place-items-center max-w-7xl px-6  mx-auto md:px-10 lg:px-12  xl:px-24 2xl:px-16    ">
      <div className="content relative flex flex-col text-center md:text-start gap-4">
        <span className="blur-custom"></span>
        <span className="blur-custom"></span>
        <h4 className=" text-shadow bg-gradient-to-r from-slate-950  to-blue-500    text-transparent bg-clip-text  text-3xl sm:text-4xl font-bold mb-3 dark:bg-none dark:text-neutral-300">
          CREATE YOUR SITE LIKE A PRO
        </h4>
        <h1 className="text-shadow text-neutral-900 mb-3  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tigh  dark:text-neutral-300">
          Hi, I'm{" "}
          <span className=" dark:webkit-effect bg-gradient-to-r from-slate-950  to-blue-500    text-transparent bg-clip-text dark:bg-none ">
            Samuel
          </span>
          , Frontend Developer
        </h1>
        <p className="text-neutral-700 mb-4 text-lg leading-6 dark:text-neutral-300">
          I am a person passionate about computing and technology, and I greatly
          enjoy learning about topics related to this field.
        </p>
        <button className="max-w-max self-center md:self-start font-semibold text-white p-2 text-xl sm:text-2xl bg-blue-700 py-2 px-4 rounded-md shadow-md hover:brightness-125 cursor-pointer transition ">
          <a href="#">Get Started</a>
        </button>
      </div>
      <div className="relative left-6 bottom-2 image max-w-full flex justify-center overflow-hidden md:overflow-visible">
        <Image
          width={550}
          height={100}
          className="header-Image cursor-pointer w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] h-auto"
          src={main.src}
          alt="Main Image"
        />
      </div>
    </main>
  );
}
