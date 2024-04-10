"use client";
import React from "react";

//Utils
import Image from "next/image";

//Images
import IconWebsite from "../../../public/iconSite.png";

interface HeaderLogoProps {
  url: string;
  isMainHeader: boolean;
}

export default function HeaderLogoLink({ url, isMainHeader }: HeaderLogoProps) {
  return (
    <a href={url}>
      <div className="flex items-center">
        <div className="sm:w-10 w-14 sm:h-10 h-14 rounded-lg overflow-hidden">
          <Image src={IconWebsite} alt="Site Icon" fill={false} />
        </div>
        <div>
          <p
            className={`font-bold text-${
              isMainHeader ? "custom-blue" : "white"
            } sm:leading-5 leading-5 ml-2 sm:text-base text-lg`}
          >
            Telmo J. <br /> Moura
          </p>
        </div>
      </div>
    </a>
  );
}
