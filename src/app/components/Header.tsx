import React from "react";
import Image from "next/image";

// Image
import IconWebsite from "../../../public/iconSite.png";
import DownloadFile from "./downloadFile";
import TextLink from "./textLink";

function Header() {
  return (
    <div className="p-5 py-5 w-full max-h-20 bg-transparent flex items-center absolute justify-between z-50">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <Image src={IconWebsite} alt="Site Icon" fill={false} />
        </div>
        <div>
          <p className="font-bold text-custom-yellow text-lg leading-5 ml-2">
            Telmo J. <br /> Moura
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-reverse">
        <TextLink url="" text="SOBRE MIM" />
        <TextLink url="" text="PROJETOS" />
        <TextLink url="" text="CONTACTOS" />
      </div>
    </div>
  );
}

export default Header;
