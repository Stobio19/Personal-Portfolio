"use client";
import React from "react";
import "./globals.css";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`${darkMode && "dark"}`}>
      <Nav />
      <Main />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}
