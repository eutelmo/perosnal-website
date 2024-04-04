import React from "react";

//Utils
import Image from "next/image";

// Image
import IconWebsite from "../../../public/iconSite.png";
import GithubIcon from "../../../public/assets/icons/github-logo.png";
import DownloadFile from "./downloadFile";
import TextLink from "./textLink";

export default function Footer() {
  return (
    <div className="bg-custom-yellow px-10 py-5 flex justify-between ">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <Image src={IconWebsite} alt="Site Icon" fill={false} />
        </div>
        <div>
          <p className="font-bold text-custom-blue text-lg leading-5 ml-2">
            Telmo J. <br /> Moura
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col items-start space-x-reverse">
        <TextLink url="" text="SOBRE MIM" />
        <TextLink url="" text="PROJETOS" />
        <TextLink url="" text="CONTACTOS" />
        <div className="text-custom-blue font-teko px-2 text-xl underline decoration-solid hover:opacity-50 cursor-pointer">
          <DownloadFile isFooter={true} />
        </div>
      </div>

      {/* Contactos */}
      <div className="flex flex-col items-start space-x-reverse">
        <div className="text-custom-blue font-teko px-2 text-xl">
          <p>Contactos</p>
        </div>
        <div className="text-custom-blue font-teko px-2 text-xl opacity-50 cursor-pointer">
          <p>telmop1999@gmail.com</p>
        </div>
        <div className="text-custom-blue font-teko px-2 text-xl opacity-50 cursor-pointer">
          <p>+351 914 234 172</p>
        </div>
      </div>

      {/* Git */}
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <Image src={GithubIcon} alt="Site Icon" fill={false} />
        </div>
      </div>
    </div>
  );
}
