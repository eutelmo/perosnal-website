"use client";

import React, { useState } from "react";
import MobileMenu from "./MoblieMenu";

//Utils

type hamburguerProps = {
  isOpen: boolean;
};

export default function MobileHamburguer() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative w-10 h-8 cursor-pointer" onClick={handleToggle}>
        <div
          className={`absolute w-full h-1 bg-custom-blue  rounded-full transition-transform duration-300 ${
            open ? "bg-transparent" : ""
          }`}
        ></div>
        <div
          className={`absolute w-full h-1 bg-custom-blue rounded-full transition-transform duration-300 ${
            open ? "rotate-45 bg-white top-1/2" : "top-2"
          }`}
        ></div>
        <div
          className={`absolute w-full h-1 bg-custom-blue rounded-full transition-transform duration-300 ${
            open ? "-rotate-45 bg-white top-1/2" : "bottom-2"
          }`}
        ></div>
      </div>
    </>
  );
}
