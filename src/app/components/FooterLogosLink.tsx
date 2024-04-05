"use client";
import React from "react";

//Utils
import Image from "next/image";

//Images
import IconWebsite from "../../../public/iconSite.png";
import GithubIcon from "../../../public/assets/icons/github-logo.png";

interface footerLogoProps {
  url: string;
  isPageLogo: boolean;
}

export default function FooterLogo({ url, isPageLogo }: footerLogoProps) {
  return (
    <>
      {isPageLogo ? (
        <a href={url}>
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
        </a>
      ) : (
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <a href={url} target="_blank">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image src={GithubIcon} alt="Site Icon" fill={false} />
            </div>
          </a>
        </div>
      )}
    </>
  );
}
