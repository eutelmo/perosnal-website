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
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <Image src={IconWebsite} alt="Site Icon" fill={false} />
        </div>
        <div>
          <p
            className={`font-bold text-${
              isMainHeader ? "custom-blue" : "white"
            } leading-5 ml-2`}
          >
            Telmo J. <br /> Moura
          </p>
        </div>
      </div>
    </a>
  );
}
