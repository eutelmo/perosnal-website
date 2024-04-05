"use client";
import React from "react";
import Link from "next/link";

//Utils
import { usePathname } from "next/navigation";


interface TextLinkProp {
  url: string;
  text: string;
  isMainHeader: boolean;
}

export default function TextLink({ url, text, isMainHeader }: TextLinkProp) {
  const currentPath = usePathname();

  return (
    <Link href={url}>
      <div
        className={`text-${
          isMainHeader ? "custom-blue" : "white"
        } font-teko px-2 text-xl hover:text-custom-yellow cursor-pointer ${
          currentPath === url ? "underline decoration-custom-yellow" : ""
        }`}
      >
        <p>{text}</p>
      </div>
    </Link>
  );
}
