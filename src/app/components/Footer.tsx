import React from "react";

//Utils
import Image from "next/image";

// Image
import IconWebsite from "../../../public/iconSite.png";
import GithubIcon from "../../../public/assets/icons/github-logo.png";
import FooterGraphics from "../../../public/assets/icons/grafismo-footer.svg";

//Components
import DownloadFile from "./downloadFile";
import FooterLogo from "./FooterLogosLink";
import TextLinkForFooter from "./textLinkForFooter";
import { useTranslations } from "next-intl";
import FooterMailInput from "./FooterMailInput";
import FooterPhoneInput from "./FooterPhoneInput";

export default function Footer() {
  const t = useTranslations();
  return (
    <div className="bg-custom-yellow px-10 py-5 flex flex-col sm:flex-row justify-between relative">
      {/* Logo */}
      <FooterLogo url="/" isPageLogo={true} />
      {/* Links */}
      <div className="flex flex-col sm:items-start items-center mt-4 sm:mt-0 space-x-reverse">
        <TextLinkForFooter
          isMainHeader={true}
          url="/about"
          text={t("links.aboutMe")}
        />
        <TextLinkForFooter
          isMainHeader={true}
          url="/projects"
          text={t("links.projects")}
        />
        {/* <TextLinkForFooter isMainHeader={true} url="" text="CONTACTS" /> */}
        <div className="text-custom-blue font-teko px-2 text-xl underline decoration-solid hover:opacity-50 cursor-pointer">
          <DownloadFile isFooter={true} />
        </div>
      </div>

      {/* Contactos */}
      <div className="flex flex-col sm:items-start items-center mt-4 sm:mt-0 space-x-reverse">
        <div className="text-custom-blue font-teko px-2 sm:text-xl text-2xl">
          <p>{t("links.contacts")}</p>
        </div>
        <div className="text-custom-blue font-teko px-2 sm:text-xl text-2xl opacity-50 cursor-pointer">
          <FooterMailInput />
        </div>
        <div className="text-custom-blue font-teko px-2 sm:text-xl text-2xl opacity-50 cursor-pointer">
          <FooterPhoneInput />
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
