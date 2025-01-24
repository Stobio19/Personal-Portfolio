import React from "react";
import { FullCircle } from "./icons/FullCircle";
import Image from "next/image";
import { skills } from "../data/Skills"; 

function Skills() {
  return (
    <section
      id="skills"
      className="  w-full mt-20   flex flex-col py-6 my-20 px-6 sm:px-8 lg:px-32"
    >

        <h2 className="text-shadow font-montserrat text-neutral-900 dark:text-neutral-300  text-center mb-10 font-bold text-4xl sm:text-2xl md:text-3xl lg:text-4xl">
          SKILLS
        </h2>
        <div className="grid mt-16 auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   ">
          {skills.map((skill, index) => (
            <div
            key={index}
            className="flex flex-col items-start bg-slate-800 hover:scale-105 shadow-md cursor-pointer hover:brightness-110 transition rounded-lg p-6 border-blue-500 shadow-blue-500">
              <img
              width={400}
              height={400}
              className="w-32 place-self-center"
              src={skill.image}
              alt={skill.name}
              />
              <h1 className="text-white font-rubik font-semibold sm:text-lg md:text-xl lg:text-2xl">{skill.name}</h1>
              <h4 className="text-white font-rubik text-lg mb-1">
                Level: {skill.level}
              </h4>
              <div className="flex flex-row gap-1">
                {[...Array(5)].map((_, i) => (
                  <FullCircle key={i} className={i < skill.stars ? "text-blue-300" : "text-gray-400"} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
