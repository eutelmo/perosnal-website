"use client";
import React from "react";
import Link from "next/link";

//Utils
import { usePathname } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

interface TextLinkProp {
  url: string;
  text: string;
  isMainHeader: boolean;
}

export default function TextLink({ url, text, isMainHeader }: TextLinkProp) {
  function getCurrentPathWithoutPrefix(URLprefix: string) {
    const match = URLprefix.match(/^\/[a-z]{2}\//i);
    if (match) {
      return URLprefix.replace(match[0], "/");
    }

    return URLprefix;
  }
  const currentPath = usePathname();

  return (
    <Link href={url}>
      <div
        className={`text-${
          isMainHeader ? "custom-blue" : "white"
        } font-teko px-2 text-xl hover:text-custom-yellow cursor-pointer ${
          getCurrentPathWithoutPrefix(currentPath) === url
            ? "underline decoration-custom-yellow"
            : ""
        }`}
      >
        <p>{text}</p>
      </div>
    </Link>
  );
}
