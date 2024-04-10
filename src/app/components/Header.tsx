import React from "react";
import Image from "next/image";

// Image
import IconWebsite from "../../../public/iconSite.png";

// Components
import TextLink from "./textLink";
import HeaderLogoLink from "./HeaderLogoLink";

interface Headerprops {
  isMainHeader: boolean;
}

function Header({ isMainHeader }: Headerprops) {
  return (
    <div className="p-5 py-5 w-full max-h-20  backdrop-blur-sm flex items-center absolute justify-between z-50">
      <HeaderLogoLink url={"/"} isMainHeader={isMainHeader} />
      <div className="flex items-center space-x-reverse">
        <TextLink isMainHeader={isMainHeader} url="/about" text="ABOUT ME" />
        <TextLink isMainHeader={isMainHeader} url="/projects" text="PROJECTS" />
        <TextLink isMainHeader={isMainHeader} url="" text="CONTACTS" />
      </div>
    </div>
  );
}

export default Header;
