import React from "react";

//Utils
import Image from "next/image";

// Image
import IconWebsite from "../../../public/iconSite.png";
import GithubIcon from "../../../public/assets/icons/github-logo.png";
import FooterGraphics from "../../../public/assets/icons/grafismo-footer.svg";

//Components
import DownloadFile from "./downloadFile";
import TextLink from "./textLink";
import FooterLogo from "./FooterLogosLink";

export default function Footer() {
  return (
    <div className="bg-custom-yellow px-10 py-5 flex justify-between relative">
      {/* Logo */}
      <FooterLogo url="/" isPageLogo={true} />

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
      <FooterLogo url="https://github.com/eutelmo" isPageLogo={false} />

      {/* Graphic */}
      <div>
        <div className="h-[100%] rounded-lg overflow-hidden absolute top-0 right-0 ">
          <Image src={FooterGraphics} alt="Site Icon" />
        </div>
      </div>
    </div>
  );
}
